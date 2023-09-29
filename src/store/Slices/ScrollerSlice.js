import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchScroller = createAsyncThunk(
  "scroller/fetchScroller",
  async () => {
    try {
      const response = await fetch("https://api2.cityscope.media/cities", {
        method: "GET",
        headers: { chocco: "banna" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching scroller:", error);
      throw new Error("Error fetching scroller");
    }
  }
);

const scrollerSlice = createSlice({
  name: "scroller",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScroller.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchScroller.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchScroller.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectScroller = (state) => state.Scroller;

export default scrollerSlice.reducer;
