"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Save, X, Sparkles, Youtube, Disc } from "lucide-react";
import { PlaylistRecord, savePlaylist } from "@/services/music-supabase-service";
import WebpImageUploader from "./webp-image-uploader";

interface PlaylistEditorFormProps {
  initialData?: PlaylistRecord | null;
  onSuccess: (saved: PlaylistRecord) => void;
  onCancel: () => void;
}

export default function PlaylistEditorForm({
  initialData,
  onSuccess,
  onCancel,
}: PlaylistEditorFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [desc, setDesc] = useState(initialData?.desc || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [mood, setMood] = useState(initialData?.mood || "");
  const [finalText, setFinalText] = useState(initialData?.final || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [banner, setBanner] = useState(initialData?.banner || "");
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().slice(0, 10));

  // Danh sách bài hát trong playlist: [{ name: "", desc: "", youtube: "" }]
  const [songs, setSongs] = useState<Array<{ name: string; desc: string; youtube: string }>>(
    initialData?.songs && initialData.songs.length > 0
      ? initialData.songs
      : [
          { name: "Bài hát 1", desc: "Mô tả cảm xúc về bài hát...", youtube: "https://www.youtube.com/watch?v=..." },
        ]
  );

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setDesc(initialData.desc || "");
      setDescription(initialData.description || initialData.desc || "");
      setMood(initialData.mood || "");
      setFinalText(initialData.final || "");
      setImage(initialData.image || "");
      setBanner(initialData.banner || "");
      setDate(initialData.date || new Date().toISOString().slice(0, 10));
      if (initialData.songs && initialData.songs.length > 0) {
        setSongs(initialData.songs);
      }
    }
  }, [initialData]);

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
      setSlug(generatedSlug ? `playlist-${generatedSlug}` : "");
    }
  };

  const handleAddSong = () => {
    setSongs([
      ...songs,
      { name: `Bài hát ${songs.length + 1}`, desc: "", youtube: "" },
    ]);
  };

  const handleRemoveSong = (index: number) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  const handleSongChange = (index: number, field: "name" | "desc" | "youtube", value: string) => {
    const updated = [...songs];
    updated[index][field] = value;
    setSongs(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Vui lòng nhập tên Playlist");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload: PlaylistRecord = {
        id: initialData?.id,
        title: title.trim(),
        slug: slug.trim() || `playlist-${Date.now()}`,
        desc: desc.trim(),
        description: description.trim() || desc.trim(),
        mood: mood.trim(),
        final: finalText.trim(),
        image: image || banner,
        banner: banner || image,
        date: date,
        songs: songs.filter((s) => s.name.trim().length > 0),
        views: initialData?.views || 0,
      };

      const res = await savePlaylist(payload);
      if (res.success && res.data) {
        onSuccess(res.data);
      } else {
        setError(res.error || "Không thể lưu Playlist lên Supabase");
      }
    } catch (err: any) {
      setError(err?.message || "Đã xảy ra lỗi khi lưu Playlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Disc className="w-5 h-5 text-rose-500" />
            <span>{initialData?.id ? "Chỉnh sửa Playlist" : "Thêm Playlist mới vào Supabase"}</span>
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Bảng lưu trữ: <code className="text-rose-500 font-mono">playlists_music</code>
          </p>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm">
          {error}
        </div>
      )}

      {/* Thông tin cơ bản */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Tên Playlist *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Ví dụ: Playlist Kỷ Niệm Tình Yêu..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Đường dẫn Slug (URL) *
          </label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="ví-dụ: playlist-ky-niem-tinh-yeu"
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm font-mono focus:outline-rose-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Mô tả ngắn
          </label>
          <textarea
            rows={2}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tóm tắt ngắn gọn về chủ đề hoặc cảm xúc của playlist..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Cảm nhận Playlist (Mood)
          </label>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Ví dụ: Lắng đọng, hoài niệm, nhẹ nhàng..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Ngày phát hành / Đăng bài
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>
      </div>

      {/* Xử lý ảnh WebP HD */}
      <div className="p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <h4 className="font-bold text-sm text-foreground">
            Ảnh đại diện & Banner Playlist (WebP Base64 chuẩn HD)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WebpImageUploader
            label="Ảnh bìa Cover (1280x720)"
            value={image}
            onChange={setImage}
            maxHDWidth={1280}
            maxHDHeight={720}
            aspectRatioHint="Tối đa HD 1280x720"
          />

          <WebpImageUploader
            label="Ảnh Banner chi tiết"
            value={banner}
            onChange={setBanner}
            maxHDWidth={1280}
            maxHDHeight={720}
            aspectRatioHint="Tối đa HD 1280x720"
          />
        </div>
      </div>

      {/* Danh sách bài hát */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold flex items-center gap-2">
            <Youtube className="w-4 h-4 text-rose-500" />
            <span>Danh sách bài hát trong Playlist ({songs.length} bài)</span>
          </label>
          <button
            type="button"
            onClick={handleAddSong}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold transition"
          >
            <Plus className="w-3.5 h-3.5" /> Thêm bài hát
          </button>
        </div>

        <div className="space-y-3">
          {songs.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-2.5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs text-rose-500">#{idx + 1}</span>
                <input
                  type="text"
                  required
                  value={s.name}
                  onChange={(e) => handleSongChange(idx, "name", e.target.value)}
                  placeholder="Tên bài hát (vd: Tháng Năm, Có Em...)"
                  className="flex-1 font-semibold text-xs px-2.5 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSong(idx)}
                  className="text-neutral-400 hover:text-rose-500 p-1 transition"
                  title="Xóa bài hát này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <input
                type="text"
                value={s.youtube}
                onChange={(e) => handleSongChange(idx, "youtube", e.target.value)}
                placeholder="Link YouTube (vd: https://www.youtube.com/watch?v=...)"
                className="w-full px-2.5 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background text-xs font-mono"
              />

              <textarea
                rows={1}
                value={s.desc}
                onChange={(e) => handleSongChange(idx, "desc", e.target.value)}
                placeholder="Mô tả cảm xúc về bài hát này trong playlist..."
                className="w-full px-2.5 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background text-xs"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lời kết */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
          Lời kết cho Playlist (Final thoughts)
        </label>
        <textarea
          rows={2}
          value={finalText}
          onChange={(e) => setFinalText(e.target.value)}
          placeholder="Thông điệp kết thúc playlist..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          Hủy bỏ
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-r from-rose-500 to-amber-500 text-white text-sm font-semibold shadow-md hover:opacity-95 transition disabled:opacity-50"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{initialData?.id ? "Cập nhật Playlist" : "Lưu Playlist vào Supabase"}</span>
        </button>
      </div>
    </form>
  );
}
