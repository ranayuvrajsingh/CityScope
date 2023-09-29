// ExperienceSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch experience list
export const fetchExperience = createAsyncThunk(
  "experiences/fetchExperience",
  async () => {
    try {
      const selectedCity = localStorage.getItem("selectedCity");
      if (selectedCity == "All" || selectedCity == null || selectedCity == "") {
        const response = await fetch(
          `https://api2.cityscope.media/experiences?inWeb=true`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      } else {
        const response = await fetch(
          `https://api2.cityscope.media/experiences?inWeb=true&city=${selectedCity}`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw new Error("Error fetching experiences");
    }
  }
);

const experienceSlice = createSlice({
  name: "experiences",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperience.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchExperience.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectExperiences = (state) => state.experiences.data;

export default experienceSlice.reducer;
