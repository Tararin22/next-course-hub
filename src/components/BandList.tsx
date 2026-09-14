"use client";
// ต้องเป็น Client Component เพราะมี useState และ event handler

import { useMemo, useState } from "react";
import { Band } from "@/types/band";
import BandCard from "./BandCard";

type BandListProps = {
  bands: Band[]; // รับข้อมูลวงทั้งหมดมาจาก page.tsx
};

type SortOption = "none" | "name" | "year";

export default function BandList({ bands }: BandListProps) {
  // ---------- State ----------

  const [search, setSearch] = useState(""); // คำค้นหา (Controlled Input)

  const [followedIds, setFollowedIds] = useState<Set<number>>(new Set());
  // เก็บ id ของวงที่ follow อยู่ ใช้ Set เพื่อเช็คเร็ว ไม่เก็บ "จำนวน" แยก (คำนวณจาก .size แทน)

  const [likes, setLikes] = useState<Record<number, number>>({});
  // เก็บจำนวน like ต่อวง key = band.id, value = จำนวนครั้งที่กด

  const [sortBy, setSortBy] = useState<SortOption>("none");
  // เก็บแค่ "เงื่อนไขการเรียง" ไม่เก็บผลลัพธ์ที่เรียงแล้ว

  // ---------- Handlers ----------

  function handleToggleFollow(bandId: number) {
    setFollowedIds((prev) => {
      const next = new Set(prev); // ต้องสร้าง Set ใหม่ทุกครั้ง ห้ามแก้ตัวเดิม
      if (next.has(bandId)) {
        next.delete(bandId);
      } else {
        next.add(bandId);
      }
      return next;
    });
  }

  function handleLike(bandId: number) {
    setLikes((prev) => ({
      ...prev,
      [bandId]: (prev[bandId] ?? 0) + 1,
    }));
  }

  function handleClearFilters() {
    setSearch("");
    setSortBy("none");
    // ไม่แตะ followedIds กับ likes เพราะเป็นการกระทำของ user ไม่ใช่ตัวกรอง
  }

  // ---------- ข้อมูลที่จะแสดงจริง (คำนวณสด ไม่เก็บเป็น state) ----------

  const visibleBands = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const filtered = keyword
      ? bands.filter((band) => band.name.toLowerCase().includes(keyword))
      : bands;

    const sorted = [...filtered]; // copy ก่อน sort เสมอ

    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "year") {
      sorted.sort((a, b) => a.foundedYear - b.foundedYear);
    }

    return sorted;
  }, [bands, search, sortBy]);

  const followedCount = followedIds.size; // อัปเดตอัตโนมัติทุกครั้งที่ followedIds เปลี่ยน

  // ---------- Render ----------

  return (
    <section>
      {/* แถบควบคุม: ค้นหา / เรียง / ล้างเงื่อนไข / จำนวนที่ติดตาม */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหาชื่อวงดนตรี..."
            className="w-full sm:w-64 rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="none">ไม่เรียง</option>
            <option value="name">เรียงตามชื่อวง (A-Z)</option>
            <option value="year">เรียงตามปีที่ก่อตั้ง</option>
          </select>

          <button
            onClick={handleClearFilters}
            className="rounded-md px-3 py-2 text-sm border border-gray-300 hover:bg-gray-100 transition"
          >
            ล้างเงื่อนไขทั้งหมด
          </button>
        </div>

        <p className="text-sm sm:text-base font-semibold whitespace-nowrap">
          กำลังติดตาม: {followedCount} วง
        </p>
      </div>

      {/* Empty State */}
      {visibleBands.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          <p className="text-lg font-semibold">ไม่พบวงดนตรีที่ตรงกับคำค้นหา</p>
          <p className="text-sm mt-1">ลองค้นหาด้วยคำอื่น หรือกดล้างเงื่อนไขทั้งหมด</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followedIds.has(band.id)}
              onToggleFollow={() => handleToggleFollow(band.id)}
              likeCount={likes[band.id] ?? 0}
              onLike={() => handleLike(band.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}