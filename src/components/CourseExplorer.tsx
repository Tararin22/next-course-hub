"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
import CourseCard from "./CourseCard";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState("");// สร้าง state สำหรับเก็บค่าคำค้นหา โดยเริ่มต้นเป็นสตริงว่าง

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value); // เมื่อผู้ใช้พิมพ์ในช่องค้นหา จะเรียกใช้ฟังก์ชัน 
  }                                 // handleKeywordChange เพื่ออัปเดตค่า keyword


    const searchText = keyword.trim().toLowerCase(); // แปลงค่าคำค้นหาเป็นตัวพิมพ์เล็กและลบช่องว่างด้านหน้าและด้านหลัง

    // เก็บผลการค้นหาไว้ที่ตัวแปรใหม่ visibleCourses โดยใช้ filter เพื่อกรองรายวิชาที่ตรงกับคำค้นหา
    const visibleCourses = courses.filter(
        (course) =>
        // ค้นหาตามชื่อวิชา "หรือ" รหัสวิชา
            course.title.toLowerCase().includes(searchText) ||
            course.code.includes(searchText) // กรองรายวิชาที่ตรงกับคำค้นหา โดยตรวจสอบทั้งชื่อวิชาและรหัสวิชา
);


    const [favoriteIds, setFavoriteIds] = useState<number[]>([]); // สร้าง state สำหรับเก็บรายวิชาที่ถูกทำเครื่องหมายเป็นรายการโปรด โดยเริ่มต้นเป็นอาร์เรย์ว่าง

    function handleToggleFavorite(id: number) { // ฟังก์ชันสำหรับสลับสถานะรายการโปรดของรายวิชา
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
  );
}


//ช่องค้นหา
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <input
        type="search"// กำหนดประเภทของ input เป็น search
        aria-label="ค้นหารายวิชา" // กำหนดป้ายกำกับสำหรับการเข้าถึง (accessibility) ของช่องค้นหา
        value={keyword} // กำหนดค่า value ของช่องค้นหาเป็นค่า keyword
        onChange={handleKeywordChange} // เมื่อค่าของช่องค้นหาเปลี่ยนแปลง จะเรียกใช้ฟังก์ชัน handleKeywordChange
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา" // กำหนดข้อความแนะนำ (placeholder) สำหรับช่องค้นหา
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
      />
      {visibleCourses.length === 0 ? (
        <p className="mt-10 text-center text-sm text-gray-500">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> {/* แสดงรายวิชาที่ตรงกับเงื่อนไข */}
            {visibleCourses.map((course) => ( // ใช้ map เพื่อวนลูปรายวิชาที่ตรงกับเงื่อนไข
                //<CourseCard key={course.id} course={course} /> // แสดง CourseCard สำหรับแต่ละรายวิชา โดยใช้ course.id เป็น key
            <CourseCard
                key={course.id}
                course={course}
                isFavorite={favoriteIds.includes(course.id)}
                onToggleFavorite={handleToggleFavorite}
            />
        ))}
        </section>
     )}

    </div>
  );
}