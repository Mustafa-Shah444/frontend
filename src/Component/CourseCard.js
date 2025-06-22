import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ product }) {
  return (
    <div>
      <Link>
        <div className="shadow-lg rounded-md cursor-pointer">
          <img
            src={product.image || "/courses-images/default.jpg"}
            alt={product.title}
            className="h-[223px] w-full"
          />
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-4">{product.title}</h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description?.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">{product.price || "Free"}</p>
            <p className="text-blue-600 font-medium">View Details</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
