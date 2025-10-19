"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <Button
      variant="outline"
      size="default"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex items-center gap-2 rounded-full px-4 transition-all duration-300"
      aria-label="Chuyển chế độ sáng/tối"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
            <span>Sáng</span>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 flex-row-reverse"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <span>Tối</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
