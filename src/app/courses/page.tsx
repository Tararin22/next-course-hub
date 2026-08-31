import CoursesCard from "../../components/CourseCard";

import { courses } from "@/data/couresdata";

export default function CoursesPage() {
  return (
    <>
      <div className="p-4">
        {courses.map((course, index) => ( <CoursesCard key={index} course={course} />  
        ))}
      </div>
    </>
  );


} 
