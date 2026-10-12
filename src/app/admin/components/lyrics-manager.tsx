"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Music,
  Plus,
  Sparkles,
  Edit2,
  Trash2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Search,
  Disc,
  Play,
  Pause,
  Cloud,
  Volume2,
  Check
} from "lucide-react";
import {
  SongLyricRecord,
  getSongs,
  setCurrentSong,
  deleteSong,
  getCurrentSong,
  getSongById
} from "@/services/music-supabase-service";
import SongEditorForm from "./song-editor-form";
import AdminPagination from "./admin-pagination";

export default function LyricsManager() {
  const [songs, setSongs] = useState<SongLyricRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | "current" | "has_audio" | "no_audio">("all");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingSong, setEditingSong] = useState<SongLyricRecord | null>(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [currentSong, setCurrentSongState] = useState<SongLyricRecord | null>(null);
  const [actionMessage, setActionMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);

  const handleStartEdit = async (song: SongLyricRecord) => {
    setIsEditorOpen(true);
    setEditingSong(song);

    if (song.id) {
      try {
        setIsLoadingDetail(true);
        const fullDetail = await getSongById(song.id);
        if (fullDetail) {
          setEditingSong(fullDetail);
        }
      } catch (err) {
        console.warn("Notice fetching full song detail:", err);
      } finally {
        setIsLoadingDetail(false);
      }
    }
  };

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const [listRes, curRes] = await Promise.all([
        getSongs({ page, limit, search }),
        getCurrentSong(),
      ]);
      setSongs(listRes.data);
      setTotal(listRes.total);
      setTotalPages(listRes.totalPages);
      setCurrentSongState(curRes);
    } catch {
      // Graceful error fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [page, limit]);

  const handleSetCurrent = async (id: number, title: string) => {
    try {
      const ok = await setCurrentSong(id);
      if (ok) {
        setActionMessage({
          text: `Đã đặt "${title}" làm bài hát hiện tại thành công!`,
          type: "success",
        });
        fetchSongs();
      } else {
        setActionMessage({
          text: `Không thể đặt bài hát hiện tại trên Supabase. Bạn có thể nhấn "Đồng bộ lên Supabase" trước.`,
          type: "error",
        });
      }
    } catch (e: any) {
      setActionMessage({ text: e?.message || "Lỗi khi cập nhật bài hát hiện tại", type: "error" });
    }
    setTimeout(() => setActionMessage(null), 4000);
  };

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bài hát "${title}"?`)) return;
    const ok = await deleteSong(id);
    if (ok) {
      setActionMessage({ text: `Đã xóa bài hát "${title}"`, type: "success" });
      fetchSongs();
    } else {
      setActionMessage({ text: `Không thể xóa bài hát từ Supabase`, type: "error" });
    }
    setTimeout(() => setActionMessage(null), 3500);
  };

  const toggleAudio = (url?: string) => {
    if (!url) return;
    if (playingAudioUrl === url) {
      setPlayingAudioUrl(null);
    } else {
      setPlayingAudioUrl(url);
    }
  };

  // Lọc dữ liệu theo filterType
  const filteredSongs = useMemo(() => {
    return songs.filter((s) => {
      const isCur = s.is_current || (currentSong?.id === s.id);
      if (filterType === "current") return isCur;
      if (filterType === "has_audio") return !!s.audio_url;
      if (filterType === "no_audio") return !s.audio_url;
      return true;
    });
  }, [songs, filterType, currentSong]);

  return (
    <div className="space-y-6">
      {/* Audio Element preview ngầm */}
      {playingAudioUrl && (
        <audio
          src={playingAudioUrl}
          autoPlay
          onEnded={() => setPlayingAudioUrl(null)}
          onError={() => setPlayingAudioUrl(null)}
        />
      )}

      {/* Top Header Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-bold">Quản lý Lời bài hát & Âm nhạc</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold">
              Bảng: lyrics_music
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[11px] font-semibold flex items-center gap-1">
              <Cloud className="w-3 h-3" />
              <span>Supabase Cloud DB</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Hỗ trợ ảnh Cover WebP Base64 (chuẩn HD tối đa), quản lý chi tiết từng đoạn lời và chọn bài hát hiện tại.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setEditingSong(null);
              setIsEditorOpen(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-rose-500 to-amber-500 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm bài hát mới</span>
          </button>

          <button
            onClick={fetchSongs}
            className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition"
            title="Làm mới danh sách"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Thông báo kết quả thao tác */}
      {actionMessage && (
        <div
          className={`p-3.5 rounded-xl border flex items-center gap-2 text-xs font-medium animate-in fade-in duration-200 ${
            actionMessage.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              : "bg-rose-500/10 border-rose-500/20 text-rose-500"
          }`}
        >
          {actionMessage.type === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          <span>{actionMessage.text}</span>
        </div>
      )}

      {/* Editor Modal Popup Overlay */}
      {isEditorOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsEditorOpen(false);
              setEditingSong(null);
            }
          }}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto p-5 sm:p-7 rounded-3xl border border-rose-500/30 bg-background shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoadingDetail && (
              <div className="absolute top-4 right-14 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 text-[11px] font-semibold animate-pulse z-10">
                <div className="w-3 h-3 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
                <span>Đang tải dữ liệu chi tiết...</span>
              </div>
            )}
            <SongEditorForm
              key={editingSong ? `song-${editingSong.id || editingSong.slug}-${editingSong.image_base64 ? 'full' : 'basic'}` : "new-song"}
              initialData={editingSong}
              onSuccess={(saved) => {
                setIsEditorOpen(false);
                setEditingSong(null);
                setActionMessage({
                  text: `Đã lưu bài hát "${saved.title}" thành công vào Supabase!`,
                  type: "success",
                });
                fetchSongs();
                setTimeout(() => setActionMessage(null), 3500);
              }}
              onCancel={() => {
                setIsEditorOpen(false);
                setEditingSong(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Card Nổi bật: Bài hát hiện tại đang chọn */}
      {currentSong && (
        <div className="p-5 rounded-2xl border border-rose-500/20 bg-linear-to-r from-rose-500/10 via-amber-500/5 to-purple-500/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 border border-white/20 shrink-0">
              {currentSong.image_base64 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentSong.image_base64}
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-rose-400">
                  <Disc className="w-8 h-8 animate-spin" />
                </div>
              )}
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-500 uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3" />
                <span>Bài hát đang phát (Active trên Trang chủ & Lời bài hát)</span>
              </div>
              <h4 className="font-bold text-base">{currentSong.title}</h4>
              <p className="text-xs text-neutral-500">
                Ca sĩ: <strong className="text-foreground">{currentSong.artist}</strong> • Năm: {currentSong.year || "2024"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentSong.audio_url && (
              <button
                onClick={() => toggleAudio(currentSong.audio_url)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-500 text-xs font-semibold hover:bg-rose-500 hover:text-white transition"
              >
                {playingAudioUrl === currentSong.audio_url ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Dừng phát</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Nghe thử</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => handleStartEdit(currentSong)}
              className="px-3.5 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
            >
              Chỉnh sửa bài này
            </button>
          </div>
        </div>
      )}

      {/* Thanh điều khiển: Tìm kiếm & Bộ lọc */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm theo tên bài hát, ca sĩ, nhạc sĩ (nhấn Enter)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setPage(1);
                fetchSongs();
              }
            }}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background text-xs focus:outline-rose-500"
          />
        </div>

        {/* Bộ lọc Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => {
              setFilterType("all");
              setPage(1);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition shrink-0 ${
              filterType === "all"
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-foreground"
            }`}
          >
            Tất cả ({total})
          </button>
          <button
            onClick={() => {
              setFilterType("current");
              setPage(1);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition shrink-0 ${
              filterType === "current"
                ? "bg-rose-500 text-white"
                : "border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-foreground"
            }`}
          >
            Đang chọn phát
          </button>
          <button
            onClick={() => setFilterType("has_audio")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition shrink-0 ${
              filterType === "has_audio"
                ? "bg-amber-500 text-white"
                : "border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-foreground"
            }`}
          >
            Có Audio
          </button>
        </div>
      </div>

      {/* Danh sách bài hát dạng bảng */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100/70 dark:bg-neutral-800/70 border-b border-neutral-200 dark:border-neutral-800 uppercase font-semibold text-neutral-500 tracking-wider">
              <tr>
                <th className="py-3 px-4">Ảnh Cover WebP HD</th>
                <th className="py-3 px-4">Tên bài hát & Nghệ sĩ</th>
                <th className="py-3 px-4 text-center">Trạng thái phát</th>
                <th className="py-3 px-4 text-center">Đoạn lời</th>
                <th className="py-3 px-4">Audio</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-neutral-500">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
                      <span>Đang tải danh sách bài hát...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredSongs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-neutral-500 space-y-2">
                    <p>Không tìm thấy bài hát nào phù hợp.</p>
                    <p className="text-xs text-neutral-400">
                      Bạn có thể nhấn nút <strong>&quot;Đồng bộ lên Supabase&quot;</strong> hoặc <strong>&quot;Thêm bài hát mới&quot;</strong> ở trên.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredSongs.map((song) => {
                  const isCur = song.is_current || (currentSong?.id === song.id);
                  const isPlayingThis = playingAudioUrl === song.audio_url;

                  return (
                    <tr
                      key={song.id || song.slug}
                      className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
                    >
                      {/* Ảnh WebP */}
                      <td className="py-3 px-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 flex items-center justify-center shrink-0">
                          {song.image_base64 ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={song.image_base64}
                              alt={song.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Disc className="w-5 h-5 text-neutral-600" />
                          )}
                        </div>
                      </td>

                      {/* Tiêu đề & Nghệ sĩ */}
                      <td className="py-3 px-4">
                        <div className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                          <span>{song.title}</span>
                          {isCur && (
                            <span className="px-1.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-[10px] font-bold">
                              Đang phát
                            </span>
                          )}
                        </div>
                        <div className="text-neutral-500 text-xs mt-0.5">
                          Ca sĩ: <span className="font-medium text-neutral-700 dark:text-neutral-300">{song.artist}</span>
                          {song.composer && <span> • Sáng tác: {song.composer}</span>}
                        </div>
                      </td>

                      {/* Nút đặt bài hát hiện tại */}
                      <td className="py-3 px-4 text-center">
                        {isCur ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500 text-white text-xs font-semibold shadow-xs">
                            <Check className="w-3.5 h-3.5" />
                            <span>Đang chọn</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => song.id && handleSetCurrent(song.id, song.title)}
                            className="px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-rose-500 text-xs font-medium transition hover:text-rose-500"
                          >
                            Đặt làm hiện tại
                          </button>
                        )}
                      </td>

                      {/* Số đoạn lyrics */}
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono text-xs">
                          {song.lyrics?.length || 0} đoạn
                        </span>
                      </td>

                      {/* Audio */}
                      <td className="py-3 px-4">
                        {song.audio_url ? (
                          <button
                            onClick={() => toggleAudio(song.audio_url)}
                            className="flex items-center gap-1 px-2 py-1 rounded-md bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-500 text-[11px] font-medium transition font-mono"
                          >
                            {isPlayingThis ? (
                              <>
                                <Pause className="w-3 h-3" />
                                <span>Dừng</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3 h-3" />
                                <span>Nghe</span>
                              </>
                            )}
                          </button>
                        ) : (
                          <span className="text-neutral-400 text-[11px] font-mono">--</span>
                        )}
                      </td>

                      {/* Thao tác */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => handleStartEdit(song)}
                            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                            title="Chỉnh sửa bài hát"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => song.id && handleDelete(song.id, song.title)}
                            className="p-1.5 rounded-lg text-neutral-400 hover:text-rose-500 hover:bg-rose-500/10 transition"
                            title="Xóa bài hát"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Phân trang Admin chuyên nghiệp */}
        <AdminPagination
          page={page}
          totalPages={totalPages}
          total={total}
          limit={limit}
          onPageChange={(newPage) => setPage(newPage)}
          onLimitChange={(newLimit) => setLimit(newLimit)}
          colorTheme="rose"
          itemLabel="bài hát"
        />
      </div>
    </div>
  );
}
