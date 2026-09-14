//"use client";

//import CoursesCard from "../../components/CourseCard";
import CourseExplorer from "@/components/CourseExplorer";

import { courses } from "@/data/couresdata";

export default function CoursesPage() {
  return (
    <>
     
      <CourseExplorer courses={courses} />



   {/*   <div className="p-4">
        {courses.map((course, index) => ( 
          <CoursesCard key={index} course={course} />  
        ))}
      </div> */}
    </>
  );


} 
