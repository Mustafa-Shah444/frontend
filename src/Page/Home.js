import React, { useEffect } from "react";
import WebCourses from "../Component/WebCourses";
import { useDispatch } from "react-redux";
import {
  fetchCourses,
  setselectedCategory,
} from "../Feature/Courses-Details/CoursesSlice";

const Category = [
  "All",
  "Web Courses",
  "Marketing Courses",
  "Tradding Courses",
];

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex gap-4 overflow-x-auto">
        {Category.map((Cat) => (
          <button
            key={Cat}
            className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
            onClick={() => dispatch(setselectedCategory(Cat))}
          >
            {Cat}
          </button>
        ))}
      </div>
      <WebCourses />
    </div>
  );
}
