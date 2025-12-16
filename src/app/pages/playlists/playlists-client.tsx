"use client";

import { useState, useMemo, useEffect, JSX } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { Search, Filter, SortAsc } from "lucide-react";

import PostCard from "@/app/components/items/post-card";
import { Post } from "@/app/types/type";
import { categoriesData } from "@/app/data/category-data";
import { playlistsData } from "@/app/data/playlists-data";

export default function BlogClient(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Lấy các giá trị từ URL (nếu có), nếu không thì dùng default
  const currentPage = Number(searchParams.get("page")) || 1;
  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "Tất cả";
  const urlSort = (searchParams.get("sort") as "newest" | "oldest") || "newest";

  // State nội bộ để người dùng tương tác mượt mà
  const [search, setSearch] = useState<string>(urlSearch);
  const [category, setCategory] = useState<string>(urlCategory);
  const [sort, setSort] = useState<"newest" | "oldest">(urlSort);
  const [page, setPage] = useState<number>(currentPage);

  const pageSize = 12;

  // Đồng bộ state với URL khi URL thay đổi (back/forward hoặc load trang)
  useEffect(() => {
    setPage(currentPage);
    setSearch(urlSearch);
    setCategory(urlCategory);
    setSort(urlSort);
  }, [currentPage, urlSearch, urlCategory, urlSort]);

  // Hàm cập nhật URL mà không reload trang
  const updateURL = () => {
    const params = new URLSearchParams();

    if (page !== 1) params.set("page", page.toString());
    if (search.trim()) params.set("search", search.trim());
    if (category !== "Tất cả") params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);

    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  // Cập nhật URL khi các filter thay đổi (search, category, sort) → reset về trang 1
  useEffect(() => {
    updateURL();
    setPage(1);
  }, [search, category, sort]);

  // Chỉ cập nhật URL khi page thay đổi (không reset các filter khác)
  useEffect(() => {
    updateURL();
  }, [page]);

  // 🔍 Lọc dữ liệu
  const filtered: Post[] = useMemo(() => {
    let result: Post[] = [...playlistsData];

    if (search.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "Tất cả") {
      result = result.filter((p) =>
        p.categories.some((c) => c.name === category)
      );
    }

    result.sort((a, b) => {
      const da = new Date(a.date || "").getTime();
      const db = new Date(b.date || "").getTime();
      return sort === "newest" ? db - da : da - db;
    });

    return result;
  }, [search, category, sort]);

  const totalPages: number = Math.ceil(filtered.length / pageSize);
  const paginated: Post[] = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-0 py-12 mb-16">
      <div className="flex flex-col items-center w-full space-y-10 mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100">
          Playlists
        </h1>

        {/* Khối lọc + tìm kiếm */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-3xl">
          {/* Tìm kiếm */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <Input
              placeholder="Tìm theo tiêu đề..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-10 text-lg"
            />
          </div>

          {/* Bộ lọc Category */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="sm:w-40 flex items-center px-3 gap-2 h-12">
                <SelectValue placeholder="Thể loại" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả</SelectItem>
                {categoriesData.map((c) => (
                  <SelectItem key={c.name} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sắp xếp */}
          <div className="flex items-center gap-2 w-full sm:w-auto h-12">
            <SortAsc className="h-5 w-5 text-gray-500" />
            <Select
              value={sort}
              onValueChange={(val) => setSort(val as "newest" | "oldest")}
            >
              <SelectTrigger className="w-full sm:w-40 h-12 flex items-center px-3 gap-2">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Danh sách playlists */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 my-48">
          Không tìm thấy playlists nào phù hợp.
        </div>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <Pagination className="mt-12 flex justify-center">
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setPage(i + 1)}
                  isActive={page === i + 1}
                  className="cursor-pointer"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}