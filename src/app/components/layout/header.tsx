"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import logo from "../../asset/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 60) {
        // cuộn xuống
        setShowNav(false);
      } else {
        // cuộn lên
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Logo fixed khi nav ẩn */}
      {!showNav && (
        <Link
          href="/"
          className="fixed top-4 left-4 z-50 transition-opacity duration-1000"
        >
          <Image
            src={logo}
            alt="Moe Logo"
            width={40}
            height={40}
            className="rounded-full object-cover border border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur"
          />
        </Link>
      )}

      {/* NAV */}
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
            px-4 py-3
            rounded-2xl
          shadow-[0_4px_20px_rgba(0,0,0,0.07)] 
            bg-background/60 backdrop-blur-md
          "
        >
          {/* Logo trong nav */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Moe Logo"
              width={42}
              height={42}
              className="rounded-2xl object-cover"
              priority
            />
            <span className="font-bold text-lg text-foreground">Moe</span>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-400">
            {[
              ["Home", "/"],
              ["Lyrics", "/pages/lyrics"],
              ["Playlists", "/pages/playlists"],
              ["Blogs", "/pages/blogs"],
              ["About", "/about"],
            ].map(([name, path]) => (
              <li key={name}>
                <Link
                  href={path}
                  className="transition-colors hover:text-foreground"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur">
            <ul className="flex flex-col items-center py-4 gap-3 text-sm text-neutral-600 dark:text-neutral-300">
              {[
                ["Home", "/"],
                ["Lyrics", "/pages/lyrics"],
                ["Playlists", "/pages/playlists"],
                ["Blogs", "/pages/blogs"],
                ["About", "/about"],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link
                    href={path}
                    className="block py-2 hover:text-foreground transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
