"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "../../asset/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="dark:border-neutral-800 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo */}
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
        <ul className="hidden md:flex gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {[
            ["Home", "/"],
            ["Lyrics", "/pages/lyrics"],
            ["Playlists", "/pages/playlists"],
            ["Blogs", "/pages/blogs"],
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

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-muted/50 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Theme toggle (desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-neutral-200 dark:border-neutral-800">
          <ul className="flex flex-col items-center py-4 gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            {[
              ["Home", "/"],
              ["Lyrics", "/pages/lyrics"],
              ["Playlists", "/pages/playlists"],
              ["Blogs", "/pages/blogs"],
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
  );
}
