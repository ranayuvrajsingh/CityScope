import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch city brief by ID
export const fetchCityBriefById = createAsyncThunk(
  "cityBriefs/fetchCityBriefById",
  async (id) => {
    try {
      const response = await fetch(
        `https://api2.cityscope.media/cities/${id}`, // Replace with your API endpoint for fetching city briefs by ID
        {
          method: "GET",
          headers: { chocco: "banna" },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching city brief by ID");
    }
  }
);

const cityBriefByIdSlice = createSlice({
  name: "cityBriefById",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityBriefById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCityBriefById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchCityBriefById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectCityBriefById = (state) => state.cityBriefById.data;

export default cityBriefByIdSlice.reducer;
