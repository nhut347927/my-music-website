"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Search,
  RefreshCw,
  Trash2,
  Clock,
  Laptop,
  Smartphone,
  Tablet,
  Globe,
  PlusCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import {
  VisitorIpRecord,
  getVisitorIps,
  deleteVisitorIp,
  recordVisitorEntrance,
  getVisitorIp
} from "@/services/music-supabase-service";
import AdminPagination from "./admin-pagination";

export default function VisitorIpManager() {
  const [ips, setIps] = useState<VisitorIpRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"last_visited" | "most_visited" | "first_visited">("last_visited");
  const [myIp, setMyIp] = useState<string>("");
  const [actionMessage, setActionMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const fetchIps = async () => {
    try {
      setLoading(true);
      const res = await getVisitorIps({ page, limit, search, sortBy });
      setIps(res.data);
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIps();
  }, [page, limit, sortBy]);

  // Tìm nạp IP hiện tại của client
  useEffect(() => {
    getVisitorIp().then((ip) => setMyIp(ip));
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchIps();
  };

  const handleDelete = async (ip: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bản ghi IP: ${ip}?`)) return;
    const ok = await deleteVisitorIp(ip);
    if (ok) {
      setActionMessage({ text: `Đã xóa IP ${ip}`, type: "success" });
      fetchIps();
    } else {
      setActionMessage({ text: `Không thể xóa IP ${ip}`, type: "error" });
    }
    setTimeout(() => setActionMessage(null), 3500);
  };

  const handleTestMyIp = async () => {
    try {
      setActionMessage(null);
      const res = await recordVisitorEntrance({ page: "/admin (test-run)" });
      if (res.success) {
        setActionMessage({
          text: `Đã ghi nhận IP ${res.ip} thành công! (Tăng số lần + cập nhật thời gian)`,
          type: "success",
        });
        fetchIps();
      } else {
        setActionMessage({
          text: `Ghi nhận IP thất bại. Kiểm tra kết nối Supabase hoặc bảng visitor_ips_music.`,
          type: "error",
        });
      }
    } catch (e: any) {
      setActionMessage({ text: e?.message || "Lỗi khi ghi nhận IP", type: "error" });
    }
    setTimeout(() => setActionMessage(null), 4000);
  };

  // Format relative time (vd: 5 phút trước)
  const formatRelativeTime = (isoString?: string) => {
    if (!isoString) return "--";
    const date = new Date(isoString);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSec < 60) return "Vừa xong";
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} phút trước`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} giờ trước`;
    return date.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-bold">Quản lý IP Khách truy cập</h3>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold">
              Bảng: visitor_ips_music
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Mỗi địa chỉ IP chỉ có 1 dòng duy nhất — tự động tăng biến số lần và cập nhật mốc thời gian vào web.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {myIp && (
            <div className="text-xs px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">
              IP của bạn: <strong className="text-foreground">{myIp}</strong>
            </div>
          )}

          <button
            onClick={handleTestMyIp}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500 text-white text-xs font-semibold shadow-xs hover:bg-rose-600 transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Test ghi nhận IP của tôi</span>
          </button>

          <button
            onClick={fetchIps}
            className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition"
            title="Làm mới danh sách"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {actionMessage && (
        <div
          className={`p-3.5 rounded-xl border flex items-center gap-2 text-xs font-medium ${
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

      {/* Bộ lọc và Tìm kiếm */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm theo IP, Browser, OS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background text-xs focus:outline-rose-500"
          />
        </form>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs text-neutral-500">Sắp xếp:</span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background text-xs focus:outline-rose-500"
          >
            <option value="last_visited">Lần vào gần nhất</option>
            <option value="most_visited">Số lần vào nhiều nhất</option>
            <option value="first_visited">Lần đầu ghé thăm</option>
          </select>
        </div>
      </div>

      {/* Bảng dữ liệu IP */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100/70 dark:bg-neutral-800/70 border-b border-neutral-200 dark:border-neutral-800 uppercase font-semibold text-neutral-500 tracking-wider">
              <tr>
                <th className="py-3 px-4">Địa chỉ IP</th>
                <th className="py-3 px-4 text-center">Số lần vào</th>
                <th className="py-3 px-4">Lần vào gần nhất</th>
                <th className="py-3 px-4">Lần đầu vào</th>
                <th className="py-3 px-4">Thiết bị & Trình duyệt</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-neutral-500">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
                      <span>Đang tải danh sách IP từ Supabase...</span>
                    </div>
                  </td>
                </tr>
              ) : ips.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-neutral-500">
                    Chưa có bản ghi IP nào trong bảng <code className="text-rose-500">visitor_ips_music</code>.
                    <br />
                    Nhấn nút <strong>&quot;Test ghi nhận IP của tôi&quot;</strong> ở trên để tạo bản ghi đầu tiên!
                  </td>
                </tr>
              ) : (
                ips.map((row) => {
                  const isCurrent = row.ip_address === myIp;
                  return (
                    <tr
                      key={row.ip_address}
                      className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
                    >
                      {/* IP */}
                      <td className="py-3.5 px-4 font-mono font-medium">
                        <div className="flex items-center gap-2">
                          <span className="text-foreground">{row.ip_address}</span>
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans text-[10px] font-bold">
                              Bạn
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Số lần vào */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold bg-linear-to-r from-rose-500/15 to-amber-500/15 text-rose-500 border border-rose-500/20">
                          {row.visit_count} lần
                        </span>
                      </td>

                      {/* Lần gần nhất */}
                      <td className="py-3.5 px-4 text-neutral-700 dark:text-neutral-300">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{formatRelativeTime(row.last_visited_at)}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400 block mt-0.5">
                          {new Date(row.last_visited_at).toLocaleString("vi-VN")}
                        </span>
                      </td>

                      {/* Lần đầu vào */}
                      <td className="py-3.5 px-4 text-neutral-500">
                        <span>{new Date(row.first_visited_at).toLocaleDateString("vi-VN")}</span>
                      </td>

                      {/* Thiết bị & Browser */}
                      <td className="py-3.5 px-4 text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-2">
                          {row.device_type === "mobile" ? (
                            <Smartphone className="w-3.5 h-3.5 text-rose-500" />
                          ) : row.device_type === "tablet" ? (
                            <Tablet className="w-3.5 h-3.5 text-purple-500" />
                          ) : (
                            <Laptop className="w-3.5 h-3.5 text-sky-500" />
                          )}
                          <span className="capitalize">{row.device_type || "desktop"}</span>
                          <span>•</span>
                          <span>{row.browser || "Browser"}</span>
                          {row.os && <span>({row.os})</span>}
                        </div>
                      </td>

                      {/* Thao tác */}
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(row.ip_address)}
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-rose-500 hover:bg-rose-500/10 transition"
                          title="Xóa IP này"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
          colorTheme="sky"
          itemLabel="IP khách"
        />
      </div>
    </div>
  );
}
