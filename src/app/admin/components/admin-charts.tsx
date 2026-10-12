"use client";

import React, { useState } from "react";
import { Monitor, Smartphone, Tablet, Globe, TrendingUp, BarChart3, Users } from "lucide-react";
import { AnalyticsStats } from "@/services/music-supabase-service";

interface AdminChartsProps {
  stats: AnalyticsStats;
}

export default function AdminCharts({ stats }: AdminChartsProps) {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; hits: number; uniqueIps: number } | null>(null);

  const { dailyTraffic, deviceBreakdown, browserBreakdown, topIps } = stats;

  // Tính max hits để scale biểu đồ cột
  const maxHit = Math.max(...dailyTraffic.map((d) => d.hits), 10);

  // Tính tổng thiết bị
  const totalDevices = (deviceBreakdown.desktop + deviceBreakdown.mobile + deviceBreakdown.tablet) || 1;
  const desktopPct = Math.round((deviceBreakdown.desktop / totalDevices) * 100);
  const mobilePct = Math.round((deviceBreakdown.mobile / totalDevices) * 100);
  const tabletPct = Math.round((deviceBreakdown.tablet / totalDevices) * 100);

  // Tính tổng browser
  const totalBrowsers = Object.values(browserBreakdown).reduce((a, b) => a + b, 0) || 1;

  return (
    <div className="space-y-6">
      {/* Hàng 1: Biểu đồ xu hướng lượt truy cập 7 ngày */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-2 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              <h3 className="text-lg font-bold">Biểu đồ Lượt truy cập 7 ngày gần nhất</h3>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Thống kê tổng lượt vào (Hits) và số IP khách truy cập duy nhất
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-rose-500 inline-block" />
              <span>Lượt xem (Hits)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-amber-400 inline-block" />
              <span>IP Khách (Unique)</span>
            </div>
          </div>
        </div>

        {/* Khung vẽ biểu đồ cột SVG Responsive */}
        <div className="pt-6">
          <div className="h-64 w-full flex items-end justify-between gap-2 sm:gap-4 px-2">
            {dailyTraffic.map((day) => {
              const hitHeight = Math.max(8, (day.hits / maxHit) * 100);
              const ipHeight = Math.max(6, (day.uniqueIps / maxHit) * 100);

              return (
                <div
                  key={day.date}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {/* Tooltip khi hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 px-2.5 py-1 rounded-md bg-neutral-900 text-white text-[11px] whitespace-nowrap pointer-events-none shadow-md">
                    <span>{day.date}: </span>
                    <strong className="text-rose-400">{day.hits} lượt</strong>
                    <span className="text-neutral-400"> ({day.uniqueIps} IP)</span>
                  </div>

                  {/* Cột kép (Hits & IPs) */}
                  <div className="w-full max-w-[42px] flex items-end justify-center gap-1 sm:gap-1.5 h-44">
                    {/* Cột Hits */}
                    <div
                      style={{ height: `${hitHeight}%` }}
                      className="w-1/2 rounded-t-md bg-linear-to-t from-rose-600 to-rose-400 transition-all duration-300 group-hover:brightness-110 shadow-xs"
                    />
                    {/* Cột IPs */}
                    <div
                      style={{ height: `${ipHeight}%` }}
                      className="w-1/2 rounded-t-md bg-linear-to-t from-amber-500 to-amber-300 transition-all duration-300 group-hover:brightness-110 shadow-xs"
                    />
                  </div>

                  {/* Nhãn ngày */}
                  <span className="mt-3 text-[11px] font-medium text-neutral-500 group-hover:text-foreground transition-colors">
                    {day.date}
                  </span>
                </div>
              );
            })}
          </div>

          {hoveredDay && (
            <div className="mt-4 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 text-xs flex items-center justify-around text-neutral-600 dark:text-neutral-300">
              <span>Ngày: <strong className="text-foreground">{hoveredDay.date}</strong></span>
              <span>Tổng lượt vào: <strong className="text-rose-500">{hoveredDay.hits}</strong></span>
              <span>IP duy nhất: <strong className="text-amber-500">{hoveredDay.uniqueIps}</strong></span>
            </div>
          )}
        </div>
      </div>

      {/* Hàng 2: Thiết bị, Trình duyệt, Top IP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Cơ cấu Thiết bị */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-4 h-4 text-sky-500" />
            <h4 className="font-semibold text-sm">Phân bổ Thiết bị</h4>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                  <Monitor className="w-3.5 h-3.5" /> Máy tính (Desktop)
                </span>
                <span className="font-semibold">{desktopPct}% ({deviceBreakdown.desktop})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <div style={{ width: `${desktopPct}%` }} className="h-full bg-sky-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                  <Smartphone className="w-3.5 h-3.5" /> Điện thoại (Mobile)
                </span>
                <span className="font-semibold">{mobilePct}% ({deviceBreakdown.mobile})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <div style={{ width: `${mobilePct}%` }} className="h-full bg-rose-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                  <Tablet className="w-3.5 h-3.5" /> Máy tính bảng (Tablet)
                </span>
                <span className="font-semibold">{tabletPct}% ({deviceBreakdown.tablet})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <div style={{ width: `${tabletPct}%` }} className="h-full bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Cơ cấu Trình duyệt */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-emerald-500" />
            <h4 className="font-semibold text-sm">Trình duyệt phổ biến</h4>
          </div>

          <div className="space-y-3">
            {Object.entries(browserBreakdown).length > 0 ? (
              Object.entries(browserBreakdown)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 4)
                .map(([name, count]) => {
                  const pct = Math.round((count / totalBrowsers) * 100);
                  return (
                    <div key={name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">{name}</span>
                        <span className="text-neutral-500">{pct}% ({count})</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                        <div style={{ width: `${pct}%` }} className="h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                  );
                })
            ) : (
              <p className="text-xs text-neutral-500 italic py-4 text-center">Chưa có dữ liệu trình duyệt</p>
            )}
          </div>
        </div>

        {/* Card 3: Top IP vào nhiều nhất */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-amber-500" />
            <h4 className="font-semibold text-sm">Top IP truy cập nhiều nhất</h4>
          </div>

          <div className="space-y-2.5">
            {topIps && topIps.length > 0 ? (
              topIps.slice(0, 5).map((ip, idx) => (
                <div
                  key={ip.ip_address}
                  className="flex items-center justify-between text-xs p-2 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/50"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-mono truncate">{ip.ip_address}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 font-semibold shrink-0">
                    {ip.visit_count} lần
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-neutral-500 italic py-4 text-center">Chưa có IP truy cập nào</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
