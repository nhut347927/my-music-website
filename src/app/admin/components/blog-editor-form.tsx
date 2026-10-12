"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Save, X, Sparkles, BookOpen, MessageSquare } from "lucide-react";
import { BlogRecord, saveBlog } from "@/services/music-supabase-service";
import WebpImageUploader from "./webp-image-uploader";

interface BlogEditorFormProps {
  initialData?: BlogRecord | null;
  onSuccess: (saved: BlogRecord) => void;
  onCancel: () => void;
}

export default function BlogEditorForm({
  initialData,
  onSuccess,
  onCancel,
}: BlogEditorFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [desc, setDesc] = useState(initialData?.desc || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().slice(0, 10));
  const [userNameComment, setUserNameComment] = useState(initialData?.user_name_comment || "Anonymous");
  const [userRoleComment, setUserRoleComment] = useState(initialData?.user_role_comment || "Admin");
  const [comment, setComment] = useState(initialData?.comment || "");

  // Danh sách đoạn văn paragraphs: [{ type: "text" | "title", content: "" }]
  const [paragraphs, setParagraphs] = useState<Array<{ type: string; content: string }>>(
    initialData?.paragraphs && initialData.paragraphs.length > 0
      ? initialData.paragraphs
      : [
          { type: "title", content: "Mở đầu" },
          { type: "text", content: "Nội dung bài viết bắt đầu ở đây..." },
        ]
  );

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setDesc(initialData.desc || "");
      setImage(initialData.image || "");
      setDate(initialData.date || new Date().toISOString().slice(0, 10));
      setUserNameComment(initialData.user_name_comment || "Anonymous");
      setUserRoleComment(initialData.user_role_comment || "Admin");
      setComment(initialData.comment || "");
      if (initialData.paragraphs && initialData.paragraphs.length > 0) {
        setParagraphs(initialData.paragraphs);
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
      setSlug(generatedSlug ? `blog-${generatedSlug}` : "");
    }
  };

  const handleAddParagraph = (type: "text" | "title" = "text") => {
    setParagraphs([...paragraphs, { type, content: "" }]);
  };

  const handleRemoveParagraph = (index: number) => {
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  const handleParagraphChange = (index: number, field: "type" | "content", value: string) => {
    const updated = [...paragraphs];
    (updated[index] as any)[field] = value;
    setParagraphs(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Vui lòng nhập tiêu đề bài viết Blog");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload: BlogRecord = {
        id: initialData?.id,
        title: title.trim(),
        slug: slug.trim() || `blog-${Date.now()}`,
        desc: desc.trim(),
        image: image,
        date: date,
        paragraphs: paragraphs.filter((p) => p.content.trim().length > 0),
        user_name_comment: userNameComment.trim(),
        user_role_comment: userRoleComment.trim(),
        comment: comment.trim(),
        views: initialData?.views || 0,
      };

      const res = await saveBlog(payload);
      if (res.success && res.data) {
        onSuccess(res.data);
      } else {
        setError(res.error || "Không thể lưu bài Blog lên Supabase");
      }
    } catch (err: any) {
      setError(err?.message || "Đã xảy ra lỗi khi lưu bài Blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-rose-500" />
            <span>{initialData?.id ? "Chỉnh sửa bài Blog" : "Thêm bài viết Blog mới vào Supabase"}</span>
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Bảng lưu trữ: <code className="text-rose-500 font-mono">blogs_music</code>
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
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Tiêu đề bài viết Blog *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Ví dụ: Nhạc Việt 2025: Một năm nhìn lại từ góc nhìn người nghe..."
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
            placeholder="ví-dụ: nhac-viet-2025"
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm font-mono focus:outline-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Ngày đăng bài
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
            Mô tả tóm tắt (Desc)
          </label>
          <textarea
            rows={2}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tóm tắt ngắn bài viết hiển thị ở danh sách bài viết..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500"
          />
        </div>
      </div>

      {/* Ảnh bìa WebP HD */}
      <div className="p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <h4 className="font-bold text-sm text-foreground">
            Ảnh bìa bài viết Blog (WebP Base64 chuẩn HD)
          </h4>
        </div>

        <WebpImageUploader
          label="Ảnh bài viết (1280x720 max HD)"
          value={image}
          onChange={setImage}
          maxHDWidth={1280}
          maxHDHeight={720}
          aspectRatioHint="Tối đa HD 1280x720"
        />
      </div>

      {/* Nội dung bài viết (Phân đoạn Paragraphs) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-500" />
            <span>Nội dung bài viết ({paragraphs.length} đoạn)</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleAddParagraph("text")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold transition"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm Đoạn văn
            </button>
            <button
              type="button"
              onClick={() => handleAddParagraph("title")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 text-xs font-semibold transition"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm Tiêu đề con (Heading)
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {paragraphs.map((p, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border space-y-2 ${
                p.type === "title"
                  ? "bg-rose-500/5 border-rose-500/20"
                  : "bg-neutral-50/50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400">#{idx + 1}</span>
                  <select
                    value={p.type}
                    onChange={(e: any) => handleParagraphChange(idx, "type", e.target.value)}
                    className="font-semibold text-xs px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background text-rose-500"
                  >
                    <option value="text">Đoạn văn (Text)</option>
                    <option value="title">Tiêu đề con (Heading/Title)</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveParagraph(idx)}
                  className="text-neutral-400 hover:text-rose-500 p-1 transition"
                  title="Xóa đoạn này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {p.type === "title" ? (
                <input
                  type="text"
                  value={p.content}
                  onChange={(e) => handleParagraphChange(idx, "content", e.target.value)}
                  placeholder="Nhập tiêu đề phân đoạn..."
                  className="w-full px-3 py-2 rounded-lg border border-rose-500/30 bg-background text-sm font-bold focus:outline-rose-500"
                />
              ) : (
                <textarea
                  rows={3}
                  value={p.content}
                  onChange={(e) => handleParagraphChange(idx, "content", e.target.value)}
                  placeholder="Nhập nội dung đoạn văn..."
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-sm leading-relaxed focus:outline-rose-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Thông tin tác giả & Lời bình */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
          <MessageSquare className="w-4 h-4 text-rose-500" />
          <span>Thông tin Tác giả & Lời bình</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Tên tác giả</label>
            <input
              type="text"
              value={userNameComment}
              onChange={(e) => setUserNameComment(e.target.value)}
              placeholder="Anonymous"
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-xs"
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Vai trò</label>
            <input
              type="text"
              value={userRoleComment}
              onChange={(e) => setUserRoleComment(e.target.value)}
              placeholder="Admin / Tác giả"
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-neutral-500 mb-1">Lời bình của tác giả</label>
          <textarea
            rows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Chia sẻ góc nhìn cá nhân của tác giả về bài viết..."
            className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-xs"
          />
        </div>
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
          <span>{initialData?.id ? "Cập nhật Blog" : "Lưu bài Blog vào Supabase"}</span>
        </button>
      </div>
    </form>
  );
}
