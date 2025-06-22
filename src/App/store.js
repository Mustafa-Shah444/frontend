import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Feature/Courses-Details/CoursesSlice"

export const store = configureStore({
    reducer: {
        course: productReducer,
    },
});
