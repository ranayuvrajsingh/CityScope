// ArticleByIdSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch article by ID
export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (id) => {
    try {
      // url = "https://api2.cityscope.media/articles";
      // filters = "?city=eleph";
      const response = await fetch(
        `https://api2.cityscope.media/articles/${id}`, // Replace with your API endpoint for fetching articles by ID
        {
          method: "GET",
          headers: { chocco: "banna" },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching article by ID");
    }
  }
);

const articleByIdSlice = createSlice({
  name: "articleById",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchArticleById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectArticleById = (state) => state.articleById.data;

export default articleByIdSlice.reducer;
