"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Save, X, Music, Sparkles, Radio, ListMusic, Eye, HelpCircle, Quote } from "lucide-react";
import { SongLyricRecord, saveSong, extractImageSrc } from "@/services/music-supabase-service";
import WebpImageUploader from "./webp-image-uploader";
import { extractSpotifyTrackId } from "@/lib/spotify-api";

interface SongEditorFormProps {
  initialData?: SongLyricRecord | null;
  onSuccess: (saved: SongLyricRecord) => void;
  onCancel: () => void;
}

export default function SongEditorForm({
  initialData,
  onSuccess,
  onCancel,
}: SongEditorFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [artist, setArtist] = useState(initialData?.artist || "");
  const [composer, setComposer] = useState(initialData?.composer || "");
  const [producer, setProducer] = useState(initialData?.producer || "");
  const [year, setYear] = useState(initialData?.year || new Date().getFullYear().toString());
  const [duration, setDuration] = useState(initialData?.duration || "");
  const [desc, setDesc] = useState(initialData?.desc || "");
  const [quote, setQuote] = useState(initialData?.quote || (initialData as any)?.quote || "");

  // Đơn giản hóa: Chỉ sử dụng 1 trường duy nhất cho Mã nhúng Spotify (iframe hoặc link)
  const [spotifyEmbedInput, setSpotifyEmbedInput] = useState<string>(() => {
    const trackId = initialData?.spotify_track_id || (initialData as any)?.spotifyTrackId;
    if (trackId) {
      return `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    }
    const spotifyUrl = initialData?.spotify_url || (initialData as any)?.spotifyUrl;
    if (spotifyUrl) {
      return spotifyUrl;
    }
    return "";
  });

  const [vibe, setVibe] = useState(initialData?.vibe || (initialData as any)?.genre || "");
  const [story, setStory] = useState(initialData?.story || "");
  const [imageBase64, setImageBase64] = useState(
    extractImageSrc(initialData?.image_base64 || (initialData as any)?.image || "")
  );
  const [singerPhotoBase64, setSingerPhotoBase64] = useState(
    extractImageSrc(initialData?.singer_photo_base64 || (initialData as any)?.singerPhoto || "")
  );
  const [isCurrent, setIsCurrent] = useState(
    initialData?.is_current || (initialData as any)?.isCurrent || false
  );
  const [isActive, setIsActive] = useState(
    initialData?.is_active ?? (initialData as any)?.isActive ?? true
  );

  // Lyrics sections: [{ type: "Verse 1", content: "..." }]
  const [lyrics, setLyrics] = useState<Array<{ type: string; content: string }>>(
    initialData?.lyrics && initialData.lyrics.length > 0
      ? initialData.lyrics
      : [
          { type: "Verse 1", content: "" },
          { type: "Chorus", content: "" },
        ]
  );

  // Đồng bộ lại form khi dữ liệu chi tiết (Full detail) được tải về
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setArtist(initialData.artist || "");
      setComposer(initialData.composer || "");
      setProducer(initialData.producer || "");
      setYear(initialData.year || new Date().getFullYear().toString());
      setDuration(initialData.duration || "");
      setDesc(initialData.desc || "");

      const trackId = initialData.spotify_track_id || (initialData as any)?.spotifyTrackId;
      if (trackId) {
        setSpotifyEmbedInput(
          `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
        );
      } else if (initialData.spotify_url || (initialData as any)?.spotifyUrl) {
        setSpotifyEmbedInput(initialData.spotify_url || (initialData as any)?.spotifyUrl);
      }

      setVibe(initialData.vibe || (initialData as any)?.genre || "");
      setStory(initialData.story || "");
      setQuote(initialData.quote || (initialData as any)?.quote || "");
      if (initialData.image_base64 || (initialData as any)?.image) {
        setImageBase64(extractImageSrc(initialData.image_base64 || (initialData as any)?.image));
      }
      if (initialData.singer_photo_base64 || (initialData as any)?.singerPhoto) {
        setSingerPhotoBase64(
          extractImageSrc(initialData.singer_photo_base64 || (initialData as any)?.singerPhoto)
        );
      }
      setIsCurrent(initialData.is_current || (initialData as any)?.isCurrent || false);
      setIsActive(initialData.is_active ?? (initialData as any)?.isActive ?? true);

      if (initialData.lyrics && initialData.lyrics.length > 0) {
        setLyrics(initialData.lyrics);
      }
    }
  }, [initialData]);

  // Nhận diện tức thì Spotify Track ID và Live Preview URL
  const detectedTrackId = extractSpotifyTrackId(spotifyEmbedInput);
  const previewEmbedUrl = detectedTrackId
    ? `https://open.spotify.com/embed/track/${detectedTrackId}?utm_source=generator&theme=0`
    : null;

  // Quick slug generator
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!initialData?.id && !slug) {
      const generatedSlug = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[đĐ]/g, "d")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generatedSlug ? `lyric-${generatedSlug}` : "");
    }
  };

  const handleAddSection = () => {
    const defaultTypes = ["Verse 2", "Chorus 2", "Bridge", "Outro"];
    const nextType = defaultTypes[lyrics.length % defaultTypes.length] || `Đoạn ${lyrics.length + 1}`;
    setLyrics([...lyrics, { type: nextType, content: "" }]);
  };

  const handleRemoveSection = (index: number) => {
    setLyrics(lyrics.filter((_, i) => i !== index));
  };

  const handleSectionTypeChange = (index: number, val: string) => {
    const updated = [...lyrics];
    updated[index].type = val;
    setLyrics(updated);
  };

  const handleSectionContentChange = (index: number, val: string) => {
    const updated = [...lyrics];
    updated[index].content = val;
    setLyrics(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Vui lòng nhập tên bài hát");
      return;
    }
    if (!artist.trim()) {
      setError("Vui lòng nhập tên ca sĩ / nghệ sĩ");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const trackId = extractSpotifyTrackId(spotifyEmbedInput);
      const spotifyUrl = trackId
        ? `https://open.spotify.com/track/${trackId}`
        : spotifyEmbedInput.trim();

      const payload: any = {
        id: initialData?.id,
        title: title.trim(),
        slug: slug.trim() || `lyric-${Date.now()}`,
        artist: artist.trim(),
        composer: composer.trim(),
        producer: producer.trim(),
        year: year.trim(),
        duration: duration.trim(),
        desc: desc.trim(),
        audio_url: "",
        spotify_url: spotifyUrl,
        spotify_track_id: trackId || "",
        vibe: vibe.trim(),
        story: story.trim(),
        quote: quote.trim(),
        image_base64: imageBase64,
        singer_photo_base64: singerPhotoBase64,
        lyrics: lyrics.filter((l) => l.content.trim().length > 0),
        is_current: isCurrent,
        is_active: isActive,
      };

      const res = await saveSong(payload);
      if (res.success && res.data) {
        onSuccess(res.data);
      } else {
        setError(res.error || "Không thể lưu bài hát vào Supabase");
      }
    } catch (err: any) {
      setError(err?.message || "Lỗi khi gửi dữ liệu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header Form */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-500/15 text-rose-500">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">
              {initialData?.id ? `Chỉnh sửa: ${initialData.title}` : "Thêm Bài Hát & Lời Mới"}
            </h3>
            <p className="text-xs text-neutral-500">
              Nhập thông tin bài hát và dán mã nhúng Spotify iframe để phát trực tiếp.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-medium">
          {error}
        </div>
      )}

      {/* Thông tin cơ bản */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Tên bài hát <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Ví dụ: Không Buông, Vết Mưa..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Đường dẫn Slug (URL)
          </label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="lyric-ten-bai-hat"
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm font-mono text-neutral-600 dark:text-neutral-300 focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Ca sĩ / Nghệ sĩ <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Ví dụ: Vũ Cát Tường, Hngle ft. Ari..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Nhạc sĩ / Sáng tác (Composer)
          </label>
          <input
            type="text"
            value={composer}
            onChange={(e) => setComposer(e.target.value)}
            placeholder="Ví dụ: Vũ Cát Tường, Hngle..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Nhà sản xuất (Producer)
          </label>
          <input
            type="text"
            value={producer}
            onChange={(e) => setProducer(e.target.value)}
            placeholder="Ví dụ: Touliver, SlimV..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Năm phát hành
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="2024"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Thời lượng
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="03:45"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
            />
          </div>
        </div>
      </div>

      {/* TÍCH HỢP MÃ NHÚNG SPOTIFY (DUY NHẤT 1 Ô NHẬP GỌN GÀNG) */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[#1DB954]/30 bg-[#1DB954]/5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#1DB954]" />
            <h4 className="font-bold text-sm text-foreground">
              Mã Nhúng Spotify Player (Iframe)
            </h4>
          </div>
          {detectedTrackId && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1DB954]/20 text-[#1DB954] text-[11px] font-mono font-bold border border-[#1DB954]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
              <span>Track ID: {detectedTrackId}</span>
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">
            Dán mã nhúng `&lt;iframe&gt;` từ Spotify vào đây:
          </label>
          <textarea
            rows={3}
            value={spotifyEmbedInput}
            onChange={(e) => setSpotifyEmbedInput(e.target.value)}
            placeholder={`<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/06yjZpAxNl1tfrc2hNynnZ?utm_source=generator&si=f7bf91a337b64ed7" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-xs font-mono focus:outline-[#1DB954] leading-relaxed text-neutral-800 dark:text-neutral-200"
          />
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5 flex items-start gap-1">
            <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#1DB954]" />
            <span>
              <strong>Cách lấy mã:</strong> Mở Spotify &rarr; Bấm nút <strong>(...)</strong> bên cạnh bài hát &rarr; <strong>Share (Chia sẻ)</strong> &rarr; <strong>Embed track (Nhúng bài hát)</strong> &rarr; <strong>Copy (Sao chép)</strong> và dán vào ô trên.
            </span>
          </p>
        </div>

        {/* Live Preview Iframe ngay trong trang Quản trị */}
        {previewEmbedUrl && (
          <div className="pt-2 border-t border-[#1DB954]/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1DB954] flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Xem trước phát thử (Live Preview):</span>
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#1DB954]/30 bg-neutral-950 p-1">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src={previewEmbedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* VIBE & CÂU CHUYỆN BÀI HÁT */}
      <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/50 space-y-3">
        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
            Vibe Cảm Xúc &amp; Không Gian (Tags)
          </label>
          <input
            type="text"
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            placeholder="Ví dụ: Sâu lắng, Chill đêm muộn, Mưa rơi..."
            className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-xs focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
            Câu chuyện &amp; Hoàn cảnh bài hát (Story &amp; Background)
          </label>
          <textarea
            rows={2}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Phân tích hoàn cảnh sáng tác, thông điệp truyền tải đến người nghe..."
            className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-xs focus:outline-rose-500"
          />
        </div>

        {/* TRÍCH DẪN NỔI BẬT HIỂN THỊ TRANG CHỦ */}
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
          <label className="block text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
            <Quote className="w-3.5 h-3.5" />
            <span>Câu hát trích dẫn nổi bật (Hiển thị ngẫu nhiên ở Trang chủ)</span>
          </label>
          <textarea
            rows={2}
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder='Ví dụ: "Đi quãng đường thật xa, khiến mình nhận ra điều giản đơn trong chúng ta: Cứ sống bình thường thôi, bước chầm chậm sẽ đến nơi."'
            className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-xs focus:outline-amber-500 font-sans"
          />
          <p className="text-[11px] text-neutral-400 mt-1">
            Câu hát hay và đắt giá nhất của bài hát để làm trích dẫn cảm xúc ngẫu nhiên trên Trang chủ.
          </p>
        </div>
      </div>

      {/* PHẦN XỬ LÝ ẢNH SANG WEBP & BASE64 */}
      <div className="p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <h4 className="font-bold text-sm text-foreground">
            Xử lý Ảnh sang WebP Base64 (Chuẩn HD 1280x720 tối đa)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WebpImageUploader
            label="Ảnh bìa Cover (Bài hát)"
            value={imageBase64}
            onChange={setImageBase64}
            maxHDWidth={1280}
            maxHDHeight={720}
            aspectRatioHint="Tối đa HD 1280x720"
          />

          <WebpImageUploader
            label="Ảnh đại diện Ca sĩ"
            value={singerPhotoBase64}
            onChange={setSingerPhotoBase64}
            maxHDWidth={720}
            maxHDHeight={720}
            aspectRatioHint="Tối đa HD 720x720"
          />
        </div>
      </div>

      {/* PHẦN SOẠN THẢO LỜI BÀI HÁT (LYRICS) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-bold flex items-center gap-2">
              <ListMusic className="w-4 h-4 text-rose-500" />
              <span>Phân đoạn Lời bài hát ({lyrics.length} đoạn)</span>
            </label>
            <p className="text-[11px] text-neutral-400">
              Trang chi tiết sẽ tự động trích dẫn 1/4 đoạn tiêu biểu theo quy tắc Fair Use.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddSection}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Thêm phân đoạn
          </button>
        </div>

        <div className="space-y-3">
          {lyrics.map((sec, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <input
                  type="text"
                  value={sec.type}
                  onChange={(e) => handleSectionTypeChange(idx, e.target.value)}
                  placeholder="Verse 1, Chorus..."
                  className="font-semibold text-xs px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background text-rose-500 w-36 uppercase tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSection(idx)}
                  className="text-neutral-400 hover:text-rose-500 p-1 transition cursor-pointer"
                  title="Xóa phân đoạn này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <textarea
                rows={3}
                value={sec.content}
                onChange={(e) => handleSectionContentChange(idx, e.target.value)}
                placeholder="Nhập từng dòng lời bài hát tại đây..."
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-sm font-sans font-normal leading-relaxed focus:outline-rose-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CỜ TRẠNG THÁI */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isCurrent}
            onChange={(e) => setIsCurrent(e.target.checked)}
            className="w-4 h-4 accent-rose-500 rounded"
          />
          <div>
            <span className="text-sm font-semibold text-foreground">
              🌟 Đặt làm bài hát hiện tại (Current Featured Song)
            </span>
            <p className="text-xs text-neutral-500">
              Bài hát này sẽ được hiển thị nổi bật và phát trên trang chủ/lyrics của website
            </p>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-4 h-4 accent-emerald-500 rounded"
          />
          <span className="text-sm font-medium">Hiển thị công khai</span>
        </label>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
        >
          Hủy bỏ
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white text-sm font-semibold shadow-md hover:opacity-95 transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{initialData?.id ? "Cập nhật bài hát" : "Lưu vào Supabase"}</span>
        </button>
      </div>
    </form>
  );
}
