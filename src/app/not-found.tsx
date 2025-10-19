"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-[80vh] text-center px-4"
    >
      <h1 className="text-6xl font-extrabold text-black dark:text-white mb-3">
        404
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-sm sm:text-base">
       Này này này tôi nhắc bạn đấy nhé 😒😒😒
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-all"
      >
        Quay lại trang chủ
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
