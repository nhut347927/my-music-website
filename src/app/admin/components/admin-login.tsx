"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, User, Eye, EyeOff, ArrowRight, AlertCircle, Home } from "lucide-react";
import logo from "../../../asset/logo.png";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export const ADMIN_STORAGE_KEY = "moe_admin_auth_session";

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Tài khoản & Mật khẩu cấu hình (hoặc mặc định)
  const EXPECTED_USER = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin";
  const EXPECTED_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin2026";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      if (username.trim() === EXPECTED_USER && password === EXPECTED_PASS) {
        // Lưu phiên đăng nhập
        const authData = JSON.stringify({
          authenticated: true,
          user: username.trim(),
          timestamp: Date.now(),
        });

        if (rememberMe) {
          localStorage.setItem(ADMIN_STORAGE_KEY, authData);
        } else {
          sessionStorage.setItem(ADMIN_STORAGE_KEY, authData);
        }

        onLoginSuccess();
      } else {
        setError("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại!");
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card đăng nhập */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-xl p-8 shadow-2xl space-y-6">
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2 relative z-10">
            <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-500 mb-2 border border-rose-500/20 shadow-xs">
              <Lock className="w-6 h-6" />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Đăng nhập Quản trị viên
            </h2>
            <p className="text-xs text-neutral-500">
              Khu vực bảo mật — vui lòng nhập tài khoản và mật khẩu để truy cập Dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            {/* Input Tài khoản */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Tài khoản (Username)
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tài khoản admin..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500 transition shadow-xs"
                />
              </div>
            </div>

            {/* Input Mật khẩu */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Mật khẩu (Password)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-rose-500 transition shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-foreground transition p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Ghi nhớ đăng nhập */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-neutral-600 dark:text-neutral-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-rose-500"
                />
                <span>Ghi nhớ đăng nhập</span>
              </label>

              <Link
                href="/"
                className="text-neutral-500 hover:text-foreground transition flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Về trang chủ</span>
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-rose-500 to-amber-500 text-white font-semibold text-sm shadow-md hover:opacity-95 transition disabled:opacity-50"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Đăng nhập vào Admin</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
