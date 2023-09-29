import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    try {
      const response = await fetch(
        "https://api2.cityscope.media/articles?inWeb=true",
        {
          method: "GET",
          headers: { chocco: "banna" },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching features");
    }
  }
);

const articlesSlice = createSlice({
  name: "features",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectArticles = (state) => state.Articles;

export default articlesSlice.reducer;
