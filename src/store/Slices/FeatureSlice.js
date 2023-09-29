import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchfeatures = createAsyncThunk(
  "features/fetchfeatures",
  async () => {
    try {
      const response = await fetch("https://api2.cityscope.media/cities", {
        method: "GET",
        headers: { chocco: "banna" },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching features");
    }
  }
);

const featuresSlice = createSlice({
  name: "features",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchfeatures.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchfeatures.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchfeatures.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectfeatures = (state) => state.Features;

export default featuresSlice.reducer;
