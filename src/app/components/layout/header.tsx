"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import GlobalSearchModal from "@/app/components/items/global-search-modal";
import logo from "../../asset/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 60) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Lyrics", path: "/pages/lyrics" },
    { name: "Playlists", path: "/pages/playlists" },
    { name: "Blogs", path: "/pages/blogs" },
    { name: "About", path: "/about" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Fixed quick mini logo when scrolled down */}
      {!showNav && (
        <Link
          href="/"
          className="fixed top-4 left-4 z-50 transition-opacity duration-500 hover:scale-105 active:scale-95 shadow-md rounded-2xl overflow-hidden"
          title="Về trang chủ Moe"
        >
          <Image
            src={logo}
            alt="Moe Logo"
            width={38}
            height={38}
            className="rounded-2xl object-cover border border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur"
          />
        </Link>
      )}

      {/* Main Header Navbar */}
      <header
        className={`
          sticky top-3 px-3 z-40
          transition-all duration-300
          ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <nav
          className="
            max-w-6xl mx-auto
            flex items-center justify-between
            px-4 sm:px-5 py-2.5
            rounded-2xl
            border border-neutral-200/80 dark:border-neutral-800/80
            shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
            bg-background/80 backdrop-blur-xl
          "
        >
          {/* Logo & Sound Wave animation */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Image
                src={logo}
                alt="Moe Logo"
                width={38}
                height={38}
                className="rounded-xl object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-foreground tracking-tight">
                  Moe
                </span>
                {/* Minimalist monochrome sound wave bars */}
                <div className="flex items-end gap-[2px] h-3 px-1 py-0.5">
                  <span className="w-[2px] h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-pulse" />
                  <span className="w-[2px] h-3 bg-neutral-600 dark:bg-neutral-300 rounded-full animate-pulse delay-75" />
                  <span className="w-[2px] h-2.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-pulse delay-150" />
                </div>
              </div>
              <span className="text-[10px] text-neutral-400 font-medium -mt-1 hidden sm:block">
                Music &amp; Vibe
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 text-xs font-semibold">
            {navLinks.map(({ name, path }) => {
              const active = isActiveLink(path);
              return (
                <li key={name}>
                  <Link
                    href={path}
                    className={`px-3.5 py-1.5 rounded-lg transition-all ${
                      active
                        ? "bg-background text-foreground shadow-xs font-bold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-background/40"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right controls: Quick Search, Theme Toggle, Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-foreground transition cursor-pointer"
              title="Tìm kiếm nhanh (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tìm kiếm...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded-md bg-background border border-neutral-200 dark:border-neutral-800 text-neutral-400">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2.5 max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/95 backdrop-blur-xl shadow-2xl p-3 animate-in slide-in-from-top-3 duration-200">
            <ul className="flex flex-col gap-1 text-sm font-medium">
              {navLinks.map(({ name, path }) => {
                const active = isActiveLink(path);
                return (
                  <li key={name}>
                    <Link
                      href={path}
                      className={`flex items-center justify-between px-4 py-2 rounded-xl transition ${
                        active
                          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold"
                          : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
