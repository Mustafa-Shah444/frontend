import React from "react";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

export default function WebCourses() {
  const products = useSelector((state) => state.course.filteredItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-4 mt-[4rem]">
      {products.map((course) => (
        <CourseCard key={course.id} product={course} />
      ))}
    </div>
  );
}
