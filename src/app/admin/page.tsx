"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Music,
  Database,
  RefreshCw,
  Home,
  Sparkles,
  TrendingUp,
  Disc,
  ShieldCheck,
  LogOut,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  Layers,
  Cloud
} from "lucide-react";
import {
  getAdminDashboardStats,
  AnalyticsStats,
} from "@/services/music-supabase-service";
import AdminCharts from "./components/admin-charts";
import VisitorIpManager from "./components/visitor-ip-manager";
import LyricsManager from "./components/lyrics-manager";
import PlaylistManager from "./components/playlist-manager";
import BlogManager from "./components/blog-manager";
import SupabaseConfigTab from "./components/supabase-config-tab";
import AdminLogin, { ADMIN_STORAGE_KEY } from "./components/admin-login";

type ActiveTab = "analytics" | "lyrics" | "playlists" | "blogs" | "visitors" | "supabase";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("analytics");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<AnalyticsStats>({
    totalHits: 0,
    uniqueIps: 0,
    todayVisits: 0,
    totalLyrics: 0,
    totalPlaylists: 0,
    totalBlogs: 0,
    totalContentViews: 0,
    currentSong: null,
    dailyTraffic: [],
    deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
    browserBreakdown: {},
    topIps: [],
  });

  // Kiểm tra phiên đăng nhập đã lưu
  useEffect(() => {
    try {
      const stored =
        localStorage.getItem(ADMIN_STORAGE_KEY) ||
        sessionStorage.getItem(ADMIN_STORAGE_KEY);

      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.authenticated) {
          setIsAuthenticated(true);
          return;
        }
      }
    } catch {}

    setIsAuthenticated(false);
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await getAdminDashboardStats();
      setStats(data);
    } catch (err) {
      console.warn("Notice updating stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  // Trạng thái đang kiểm tra auth ban đầu
  if (isAuthenticated === null) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-neutral-500">
        <div className="w-6 h-6 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs">Đang kiểm tra bảo mật...</span>
      </div>
    );
  }

  // Chưa đăng nhập -> Hiển thị form đăng nhập bắt buộc
  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={() => {
          setIsAuthenticated(true);
          fetchStats();
        }}
      />
    );
  }

  // Tên tab hiện tại cho breadcrumb
  const tabNames: Record<ActiveTab, { title: string; desc: string; icon: any }> = {
    analytics: {
      title: "Dashboard Tổng Quan",
      desc: "Thống kê lượt truy cập, phân tích thiết bị và biểu đồ thời gian thực.",
      icon: LayoutDashboard,
    },
    lyrics: {
      title: "Quản lý Lời Bài Hát (Lyrics)",
      desc: "Quản lý toàn bộ bài hát, lời nhạc, link audio và chọn bài hát đang phát.",
      icon: Music,
    },
    playlists: {
      title: "Quản lý Playlists Tuyển Chọn",
      desc: "Quản lý các bộ sưu tập playlist bài hát, link YouTube và danh sách ca khúc con.",
      icon: Disc,
    },
    blogs: {
      title: "Quản lý Bài Viết Blogs",
      desc: "Quản lý bài viết cảm nhận âm nhạc, các đoạn văn phân tích và nhận xét tác giả.",
      icon: BookOpen,
    },
    visitors: {
      title: "Nhật Ký & Khách Truy Cập (IP)",
      desc: "Giám sát chi tiết các địa chỉ IP, thiết bị, số lần vào web và thời gian truy cập.",
      icon: Users,
    },
    supabase: {
      title: "Cơ Sở Dữ Liệu & Đồng Bộ (Supabase)",
      desc: "Kiểm tra 5 bảng dữ liệu với hậu tố '_music', chạy SQL migration và đồng bộ 1-click.",
      icon: Database,
    },
  };

  const CurrentTabIcon = tabNames[activeTab].icon;

  return (
    <div className="min-h-screen py-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-linear-to-r from-rose-500 to-amber-500 text-white text-[11px] font-bold tracking-wider uppercase">
              Admin Portal
            </span>
            <span className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Hậu tố DB: <strong className="text-rose-500">_music</strong></span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1.5 tracking-tight flex items-center gap-2.5">
            <span>{tabNames[activeTab].title}</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
            {tabNames[activeTab].desc}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Nút Quay lại Dashboard nếu đang ở tab con */}
          {activeTab !== "analytics" && (
            <button
              onClick={() => setActiveTab("analytics")}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-500 text-xs font-semibold border border-rose-500/20 transition shadow-xs"
              title="Quay lại màn hình Dashboard Tổng quan"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại Dashboard</span>
            </button>
          )}

          <button
            onClick={fetchStats}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-semibold transition"
            title="Làm mới dữ liệu thống kê"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Làm mới</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold shadow-xs hover:opacity-90 transition"
            title="Về Trang chủ website"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Trang chủ</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-500 text-neutral-500 text-xs font-semibold transition"
            title="Đăng xuất khỏi phiên quản trị"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Thoát</span>
          </button>
        </div>
      </div>

      {/* Main Tabs Switcher Navigation Bar */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md overflow-x-auto shadow-xs">
        {/* Tab 1: Dashboard */}
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "analytics"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <LayoutDashboard className="w-4 h-4 text-rose-500" />
          <span>Dashboard Tổng Quan</span>
        </button>

        {/* Tab 2: Lời bài hát */}
        <button
          onClick={() => setActiveTab("lyrics")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "lyrics"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <Music className="w-4 h-4 text-rose-500" />
          <span>Lời Bài Hát</span>
          <span className="px-1.5 py-0.2 rounded-full bg-rose-500/15 text-rose-500 text-[10px] font-mono">
            {stats.totalLyrics}
          </span>
        </button>

        {/* Tab 3: Playlists */}
        <button
          onClick={() => setActiveTab("playlists")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "playlists"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <Disc className="w-4 h-4 text-amber-500" />
          <span>Playlists</span>
          <span className="px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-500 text-[10px] font-mono">
            {stats.totalPlaylists}
          </span>
        </button>

        {/* Tab 4: Blogs */}
        <button
          onClick={() => setActiveTab("blogs")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "blogs"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <BookOpen className="w-4 h-4 text-purple-500" />
          <span>Bài Viết Blog</span>
          <span className="px-1.5 py-0.2 rounded-full bg-purple-500/15 text-purple-500 text-[10px] font-mono">
            {stats.totalBlogs}
          </span>
        </button>

        {/* Tab 5: Khách & IP */}
        <button
          onClick={() => setActiveTab("visitors")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "visitors"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <Users className="w-4 h-4 text-sky-500" />
          <span>Khách & IP</span>
          <span className="px-1.5 py-0.2 rounded-full bg-sky-500/15 text-sky-500 text-[10px] font-mono">
            {stats.uniqueIps}
          </span>
        </button>

        {/* Tab 6: Supabase */}
        <button
          onClick={() => setActiveTab("supabase")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === "supabase"
              ? "bg-background text-foreground shadow-sm border border-neutral-200/60 dark:border-neutral-700/60"
              : "text-neutral-500 hover:text-foreground"
          }`}
        >
          <Database className="w-4 h-4 text-emerald-500" />
          <span>CSDL & Cấu Hình</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* NỘI DUNG TỪNG TAB */}
      {/* ========================================================================= */}

      {/* TAB 1: DASHBOARD TỔNG QUAN */}
      {activeTab === "analytics" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Overview Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Card 1: Tổng lượt xem */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-xs mb-2">
                <span>Tổng lượt xem (Hits)</span>
                <TrendingUp className="w-4 h-4 text-rose-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {stats.totalHits.toLocaleString("vi-VN")}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Tích lũy từ tất cả các trang
              </p>
            </div>

            {/* Card 2: Số IP độc nhất */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-xs mb-2">
                <span>IP Khách duy nhất</span>
                <Users className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {stats.uniqueIps.toLocaleString("vi-VN")}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 font-mono">
                Bảng visitor_ips_music
              </p>
            </div>

            {/* Card 3: Hôm nay */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-xs mb-2">
                <span>Lượt vào hôm nay</span>
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {stats.todayVisits.toLocaleString("vi-VN")}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Theo ngày thực tế
              </p>
            </div>

            {/* Card 4: Tổng Nội dung DB */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-xs mb-2">
                <span>Nội dung quản trị</span>
                <Music className="w-4 h-4 text-purple-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                {stats.totalLyrics + stats.totalPlaylists + stats.totalBlogs}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1.5 font-mono">
                <span>{stats.totalLyrics} Nhạc</span>
                <span>•</span>
                <span>{stats.totalPlaylists} Playlist</span>
                <span>•</span>
                <span>{stats.totalBlogs} Blog</span>
              </p>
            </div>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => setActiveTab("lyrics")}
              className="p-4 rounded-2xl border border-rose-500/20 bg-linear-to-br from-rose-500/10 to-transparent hover:border-rose-500/40 cursor-pointer transition group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/15 text-rose-500">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-rose-500 transition">
                    Quản lý Lời Bài Hát
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {stats.totalLyrics} bài hát • Audio & Lời
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-rose-500 group-hover:translate-x-0.5 transition" />
            </div>

            <div
              onClick={() => setActiveTab("playlists")}
              className="p-4 rounded-2xl border border-amber-500/20 bg-linear-to-br from-amber-500/10 to-transparent hover:border-amber-500/40 cursor-pointer transition group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-500">
                  <Disc className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-amber-500 transition">
                    Quản lý Playlists
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {stats.totalPlaylists} bộ sưu tập • YouTube
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition" />
            </div>

            <div
              onClick={() => setActiveTab("blogs")}
              className="p-4 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-transparent hover:border-purple-500/40 cursor-pointer transition group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-500">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-purple-500 transition">
                    Quản lý Bài Viết Blogs
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {stats.totalBlogs} bài viết • Nhận xét
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition" />
            </div>
          </div>

          {/* Biểu đồ & Thống kê */}
          <AdminCharts stats={stats} />
        </div>
      )}

      {/* TAB 2: QUẢN LÝ LỜI BÀI HÁT */}
      {activeTab === "lyrics" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <LyricsManager />
        </div>
      )}

      {/* TAB 3: QUẢN LÝ PLAYLISTS */}
      {activeTab === "playlists" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <PlaylistManager />
        </div>
      )}

      {/* TAB 4: QUẢN LÝ BLOGS */}
      {activeTab === "blogs" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <BlogManager />
        </div>
      )}

      {/* TAB 5: KHÁCH & IP */}
      {activeTab === "visitors" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <VisitorIpManager />
        </div>
      )}

      {/* TAB 6: SUPABASE CƠ SỞ DỮ LIỆU */}
      {activeTab === "supabase" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <SupabaseConfigTab />
        </div>
      )}
    </div>
  );
}
