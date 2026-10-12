"use client";

import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { processImageToWebPBase64, formatBytes, ProcessedImageResult } from "@/lib/image-processor";

interface WebpImageUploaderProps {
  label: string;
  value?: string; // Base64 data URL
  onChange: (base64: string) => void;
  maxHDWidth?: number; // default 1280
  maxHDHeight?: number; // default 720
  aspectRatioHint?: string;
}

export default function WebpImageUploader({
  label,
  value,
  onChange,
  maxHDWidth = 1280,
  maxHDHeight = 720,
  aspectRatioHint = "Tối đa HD 1280x720",
}: WebpImageUploaderProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<ProcessedImageResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Vui lòng chọn đúng file hình ảnh (jpg, png, webp, v.v.)");
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      // Xử lý sang WebP Base64 với giới hạn chuẩn HD
      const result = await processImageToWebPBase64(file, {
        maxWidth: maxHDWidth,
        maxHeight: maxHDHeight,
        quality: 0.82,
      });

      setMeta(result);
      onChange(result.base64);
    } catch (err: any) {
      console.error("Image processing error:", err);
      setError(err?.message || "Lỗi khi chuyển đổi ảnh sang WebP");
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleRemove = () => {
    onChange("");
    setMeta(null);
    setError(null);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {label}
        </label>
        <span className="text-xs text-neutral-500 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Tự động chuyển WebP • {aspectRatioHint}</span>
        </span>
      </div>

      {value ? (
        <div className="relative rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-3 overflow-hidden group">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Image Preview */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Image Meta & Status */}
            <div className="flex-1 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Đã tối ưu WebP Base64</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">
                  HD Max {maxHDWidth}px
                </span>
              </div>

              {meta ? (
                <div className="grid grid-cols-2 gap-2 pt-1 text-neutral-600 dark:text-neutral-300">
                  <div>
                    <span className="text-neutral-400">Độ phân giải: </span>
                    <strong>{meta.width} × {meta.height} px</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400">Dung lượng WebP: </span>
                    <strong className="text-rose-500">{formatBytes(meta.processedSize)}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400">Ảnh gốc: </span>
                    <span>{formatBytes(meta.originalSize)}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">Tiết kiệm: </span>
                    <strong className="text-emerald-500">giảm {meta.savingsPercent}%</strong>
                  </div>
                </div>
              ) : (
                <p className="text-neutral-500 pt-1">
                  Đã tải ảnh Base64 sẵn sàng lưu vào CSDL Supabase.
                </p>
              )}

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium transition"
                >
                  Đổi ảnh khác
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="px-3 py-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 text-xs font-medium transition flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Xóa ảnh
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all hover:border-rose-500 hover:bg-rose-500/5 ${
            isProcessing ? "opacity-60 pointer-events-none" : "border-neutral-300 dark:border-neutral-700"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
              {isProcessing ? (
                <div className="w-6 h-6 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="w-6 h-6" />
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">
                {isProcessing ? "Đang nén sang WebP HD..." : "Nhấn để tải ảnh lên"}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Tự động nén sang WebP, giới hạn phân giải tối đa HD ({maxHDWidth}x{maxHDHeight}) và mã hóa Base64 lưu DB
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-1.5 text-xs text-rose-500 mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
