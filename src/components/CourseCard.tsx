import { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function CourseCard({ course, isFavorite, onToggleFavorite }: CourseCardProps) { 
    return (
        <>
          <article key={course.id} className="border p-4 mb-4 rounded-lg shadow-md">
            <h2>{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p className={course.isOpen ? "font-bold text-green-600" : 
              "font-bold text-red-600"}> {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
            <button
              type="button"
              aria-pressed={isFavorite}
              onClick={() => onToggleFavorite(course.id)}
            >
              {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
            </button>

          </article>
        </>
    )
} 