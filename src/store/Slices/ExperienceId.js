// ExperienceByIdSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch experience by ID
export const fetchExperienceById = createAsyncThunk(
  "experiences/fetchExperienceById",
  async (id) => {
    try {
      const response = await fetch(
        `https://api2.cityscope.media/experiences/${id}`,
        {
          method: "GET",
          headers: { chocco: "banna" },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching experience by ID");
    }
  }
);

const experienceByIdSlice = createSlice({
  name: "experienceById",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperienceById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchExperienceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchExperienceById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectExperienceById = (state) => state.experienceById.data;

export default experienceByIdSlice.reducer;
