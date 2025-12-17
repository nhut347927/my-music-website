"use client";

import React from "react";
import { categoriesData } from "@/app/data/category-data";

export default function CategoryMarquee() {
  return (
    <div
      className="
        py-4 overflow-hidden relative
      "
    >
     

      <div className="flex animate-marquee whitespace-nowrap">
        {[...categoriesData, ...categoriesData].map((cat, index) => (
          <div
            key={index}
            className="
              mx-4 inline-flex items-center justify-center
              px-6 py-2 rounded-full text-sm font-medium
              bg-white text-gray-800 border border-gray-200
              hover:bg-gray-100 transition-all duration-300
              dark:bg-gray-700/50 dark:text-white dark:border-gray-600
              dark:hover:bg-gray-600/70
              backdrop-blur-sm select-none
            "
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}
