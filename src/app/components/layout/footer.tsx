"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../asset/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="dark:border-neutral-800 bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto py-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Cột 1 - Logo & Thông tin liên hệ */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Moe Logo"
                width={42}
                height={42}
                className="rounded-2xl object-cover"
                priority
              />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Moe
              </h3>
            </Link>
          </div>

          <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-foreground shrink-0" />
              <span className="text-sm leading-relaxed">
                Hồ Chí Minh, Việt Nam
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-foreground shrink-0" />
              <span className="text-sm">nhut2846@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-foreground shrink-0" />
              <span className="text-sm">+84 377 136 093</span>
            </li>
          </ul>
        </div>

        {/* Cột 2 - Liên kết hữu ích */}
        <div className="space-y-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground">
            Liên kết hữu ích
          </h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Gói dịch vụ
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Theo dõi */}
        <div className="space-y-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground">
            Theo dõi chúng tôi
          </h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                X (Twitter)
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 4 - Đăng ký nhận tin */}
        <div className="space-y-6">
          <h4 className="text-base sm:text-lg font-semibold text-foreground">
            Đăng ký nhận tin mới
          </h4>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Nhận cập nhật về bài hát, playlist và cảm xúc âm nhạc mới nhất.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <Input
              placeholder="Nhập email của bạn"
              className="bg-muted/50 border border-neutral-300 dark:border-neutral-700 w-full"
            />
            <Button className="w-full sm:w-auto bg-foreground hover:bg-neutral-800 text-background transition-colors">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>

      {/* Dòng cuối - Copyright */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 mt-10 pt-6 pb-8 text-center px-4">
        <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Moe</span>. Mọi quyền
          được bảo lưu.
        </p>
      </div>
    </footer>
  );
}
