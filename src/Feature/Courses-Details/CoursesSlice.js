import Courses from "../../Component/CodeCoursesContent";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch data
export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8080/api/courses");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API fetch failed, using fallback:", error);
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
  item: Courses,
  filteredItems: Courses,
  searchTerm: "",
  selectedCategory: "All",
};

const filterproducts = (state) => {
  return state.item.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchCategory =
      state.selectedCategory === "All" ||
      course.category === state.selectedCategory;

    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterproducts(state);
    },
    setselectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterproducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        const enrichedCourses = action.payload.map((course) => ({
          ...course,
          id: course.courseId || Math.random().toString(36).slice(2),
          price: course.price || "Free",
          image: course.image || "/courses-images/default.jpg",
          category:
            course.title?.toLowerCase().includes("web")
              ? "Web Courses"
              : course.title?.toLowerCase().includes("market")
              ? "Marketing Courses"
              : course.title?.toLowerCase().includes("trade")
              ? "Tradding Courses"
              : "All",
        }));

        state.item = enrichedCourses;
        state.filteredItems = filterproducts({
          ...state,
          item: enrichedCourses,
        });
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        // fallback to local Courses
        state.item = Courses;
        state.filteredItems = filterproducts({
          ...state,
          item: Courses,
        });
      });
  },
});


export const {
  setSearchTerm,
  setselectedCategory,
  setCoursesFromAPI,
} = productSlice.actions;

export default productSlice.reducer;
