"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Search,
  ExternalLink,
  Cloud,
  Sparkles
} from "lucide-react";
import {
  BlogRecord,
  getBlogs,
  getBlogById,
  deleteBlog,
} from "@/services/music-supabase-service";
import BlogEditorForm from "./blog-editor-form";
import AdminPagination from "./admin-pagination";

export default function BlogManager() {
  const [blogs, setBlogs] = useState<BlogRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogRecord | null>(null);
  const [actionMessage, setActionMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getBlogs({ page, limit, search });
      setBlogs(res.data);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch {
      // Handled gracefully
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, limit]);

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bài viết Blog "${title}"?`)) return;
    const ok = await deleteBlog(id);
    if (ok) {
      setActionMessage({ text: `Đã xóa bài viết "${title}"`, type: "success" });
      fetchBlogs();
    } else {
      setActionMessage({ text: `Không thể xóa bài viết trên Supabase`, type: "error" });
    }
    setTimeout(() => setActionMessage(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-bold">Quản lý Blogs & Bài viết Cảm nhận</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-semibold">
              Bảng: blogs_music
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[11px] font-semibold flex items-center gap-1">
              <Cloud className="w-3 h-3" />
              <span>Supabase Cloud DB</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Thêm, sửa, xóa các bài viết cảm nhận âm nhạc, phân đoạn đoạn văn, nhận xét tác giả và ảnh đại diện WebP.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setEditingBlog(null);
              setIsEditorOpen(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-purple-500 to-rose-500 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Bài viết mới</span>
          </button>

          <button
            onClick={fetchBlogs}
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
              setEditingBlog(null);
            }
          }}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto p-5 sm:p-7 rounded-3xl border border-purple-500/30 bg-background shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <BlogEditorForm
              initialData={editingBlog}
              onSuccess={() => {
                setIsEditorOpen(false);
                setEditingBlog(null);
                fetchBlogs();
                setActionMessage({
                  text: editingBlog
                    ? `Đã cập nhật bài viết thành công!`
                    : `Đã tạo bài viết mới thành công!`,
                  type: "success",
                });
                setTimeout(() => setActionMessage(null), 3500);
              }}
              onCancel={() => {
                setIsEditorOpen(false);
                setEditingBlog(null);
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
            placeholder="Tìm theo tiêu đề blog, mô tả, thể loại..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            onKeyDown={(e) => e.key === "Enter" && fetchBlogs()}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background focus:outline-none focus:border-purple-500 transition"
          />
        </div>
      </div>

      {/* Table List of Blogs */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100/70 dark:bg-neutral-900/70 text-neutral-600 dark:text-neutral-400 font-semibold border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="p-3.5">Bài viết Blog</th>
                <th className="p-3.5">Slug</th>
                <th className="p-3.5">Thể loại</th>
                <th className="p-3.5">Số đoạn văn</th>
                <th className="p-3.5 text-center">Lượt xem</th>
                <th className="p-3.5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-neutral-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-purple-500" />
                    <span>Đang tải danh sách bài viết blog...</span>
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-neutral-400">
                    Không tìm thấy bài viết nào.
                  </td>
                </tr>
              ) : (
                blogs.map((b) => (
                  <tr
                    key={b.id || b.slug}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition"
                  >
                    <td className="p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-200 dark:border-neutral-800">
                          {b.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={b.image}
                              alt={b.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-500">
                              <BookOpen className="w-5 h-5 text-purple-500" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 max-w-xs">
                          <Link
                            href={`/pages/blogs/${b.slug}`}
                            target="_blank"
                            className="font-bold text-foreground hover:text-purple-500 transition line-clamp-1 flex items-center gap-1 group"
                          >
                            <span>{b.title}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition shrink-0" />
                          </Link>
                          <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                            {b.desc || "Không có mô tả"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-3.5 font-mono text-[11px] text-neutral-500 max-w-[120px] truncate">
                      {b.slug}
                    </td>

                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1 max-w-[150px]">
                        {b.categories && b.categories.length > 0 ? (
                          b.categories.slice(0, 2).map((c, i) => (
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
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold text-[11px]">
                        <Sparkles className="w-3 h-3" />
                        <span>{b.paragraphs?.length || 0} đoạn</span>
                      </span>
                    </td>

                    <td className="p-3.5 text-center font-mono text-[11px] text-neutral-500">
                      {(b.views || 0).toLocaleString("vi-VN")}
                    </td>

                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={async () => {
                            if (b.id) {
                              const full = await getBlogById(b.id);
                              setEditingBlog(full || b);
                            } else {
                              setEditingBlog(b);
                            }
                            setIsEditorOpen(true);
                          }}
                          className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition"
                          title="Chỉnh sửa Bài viết Blog"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => b.id && handleDelete(b.id, b.title)}
                          disabled={!b.id}
                          className="p-1.5 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 text-rose-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                          title="Xóa Bài viết Blog"
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
