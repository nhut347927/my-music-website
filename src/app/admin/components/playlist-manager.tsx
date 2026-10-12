"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Disc,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Search,
  ExternalLink,
  Music,
  Cloud,
  Youtube
} from "lucide-react";
import {
  PlaylistRecord,
  getPlaylists,
  getPlaylistById,
  deletePlaylist,
} from "@/services/music-supabase-service";
import PlaylistEditorForm from "./playlist-editor-form";
import AdminPagination from "./admin-pagination";

export default function PlaylistManager() {
  const [playlists, setPlaylists] = useState<PlaylistRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPlaylist, setEditingPlaylist] = useState<PlaylistRecord | null>(null);
  const [actionMessage, setActionMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const fetchPlaylists = async () => {
    try {
      setLoading(true);
      const res = await getPlaylists({ page, limit, search });
      setPlaylists(res.data);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch {
      // Handled gracefully
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, [page, limit]);

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa Playlist "${title}"?`)) return;
    const ok = await deletePlaylist(id);
    if (ok) {
      setActionMessage({ text: `Đã xóa playlist "${title}"`, type: "success" });
      fetchPlaylists();
    } else {
      setActionMessage({ text: `Không thể xóa playlist trên Supabase`, type: "error" });
    }
    setTimeout(() => setActionMessage(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <Disc className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-bold">Quản lý Playlists Tuyển Chọn</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold">
              Bảng: playlists_music
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[11px] font-semibold flex items-center gap-1">
              <Cloud className="w-3 h-3" />
              <span>Supabase Cloud DB</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Thêm, sửa, xóa các bộ sưu tập playlist bài hát, danh sách ca khúc con, link YouTube và ảnh bìa WebP.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setEditingPlaylist(null);
              setIsEditorOpen(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-amber-500 to-rose-500 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Playlist mới</span>
          </button>

          <button
            onClick={fetchPlaylists}
            className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition cursor-pointer"
            title="Làm mới danh sách"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

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

      {/* Editor Modal Popup */}
      {isEditorOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsEditorOpen(false);
              setEditingPlaylist(null);
            }
          }}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto p-5 sm:p-7 rounded-3xl border border-amber-500/30 bg-background shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaylistEditorForm
              initialData={editingPlaylist}
              onSuccess={() => {
                setIsEditorOpen(false);
                setEditingPlaylist(null);
                fetchPlaylists();
                setActionMessage({
                  text: editingPlaylist
                    ? `Đã cập nhật playlist thành công!`
                    : `Đã tạo playlist mới thành công!`,
                  type: "success",
                });
                setTimeout(() => setActionMessage(null), 3500);
              }}
              onCancel={() => {
                setIsEditorOpen(false);
                setEditingPlaylist(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Tìm theo tiêu đề playlist, mô tả, thể loại..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            onKeyDown={(e) => e.key === "Enter" && fetchPlaylists()}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Table List of Playlists */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100/70 dark:bg-neutral-900/70 text-neutral-600 dark:text-neutral-400 font-semibold border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="p-3.5">Playlist</th>
                <th className="p-3.5">Slug</th>
                <th className="p-3.5">Thể loại</th>
                <th className="p-3.5">Số bài hát</th>
                <th className="p-3.5 text-center">Lượt xem</th>
                <th className="p-3.5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-neutral-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-amber-500" />
                    <span>Đang tải danh sách playlist...</span>
                  </td>
                </tr>
              ) : playlists.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-neutral-400">
                    Không tìm thấy playlist nào.
                  </td>
                </tr>
              ) : (
                playlists.map((pl) => (
                  <tr
                    key={pl.id || pl.slug}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition"
                  >
                    <td className="p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-200 dark:border-neutral-800">
                          {pl.image || pl.banner ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={pl.image || pl.banner}
                              alt={pl.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-500">
                              <Disc className="w-5 h-5 text-amber-500" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 max-w-xs">
                          <Link
                            href={`/pages/playlists/${pl.slug}`}
                            target="_blank"
                            className="font-bold text-foreground hover:text-amber-500 transition line-clamp-1 flex items-center gap-1 group"
                          >
                            <span>{pl.title}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition shrink-0" />
                          </Link>
                          <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                            {pl.desc || pl.description || "Không có mô tả"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-3.5 font-mono text-[11px] text-neutral-500 max-w-[120px] truncate">
                      {pl.slug}
                    </td>

                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1 max-w-[150px]">
                        {pl.categories && pl.categories.length > 0 ? (
                          pl.categories.slice(0, 2).map((c, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px]"
                            >
                              {c.name}
                            </span>
                          ))
                        ) : (
                          <span className="text-neutral-400 text-[10px]">—</span>
                        )}
                      </div>
                    </td>

                    <td className="p-3.5 font-medium">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                        <Music className="w-3 h-3" />
                        <span>{pl.songs?.length || 0} bài</span>
                      </span>
                    </td>

                    <td className="p-3.5 text-center font-mono text-[11px] text-neutral-500">
                      {(pl.views || 0).toLocaleString("vi-VN")}
                    </td>

                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={async () => {
                            if (pl.id) {
                              const full = await getPlaylistById(pl.id);
                              setEditingPlaylist(full || pl);
                            } else {
                              setEditingPlaylist(pl);
                            }
                            setIsEditorOpen(true);
                          }}
                          className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition"
                          title="Chỉnh sửa Playlist"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => pl.id && handleDelete(pl.id, pl.title)}
                          disabled={!pl.id}
                          className="p-1.5 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 text-rose-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                          title="Xóa Playlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <AdminPagination
          page={page}
          totalPages={totalPages}
          total={total}
          limit={limit}
          onPageChange={(p) => setPage(p)}
          onLimitChange={(l) => {
            setLimit(l);
            setPage(1);
          }}
        />
      </div>
    </div>
  );
}
