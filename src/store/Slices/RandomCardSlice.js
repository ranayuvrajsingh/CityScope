import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomCard = createAsyncThunk(
  "randomcard/fetchRandomCard",
  async () => {
    try {
      const response = await fetch("https://api2.cityscope.media/medium", {
        method: "GET",
        headers: { chocco: "banna" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching randomcard:", error);
      throw new Error("Error fetching randomcard");
    }
  }
);

const randomcardSlice = createSlice({
  name: "randomcard",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomCard.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchRandomCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchRandomCard.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectRandomCard = (state) => state.RandomCard;

export default randomcardSlice.reducer;
