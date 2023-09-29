import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Define the async thunk to fetch byte data
export const fetchByteData = createAsyncThunk(
  "byte/fetchByteData",
  async () => {
    try {
      const response = await axios.get("https://api2.cityscope.media");
      return response.data.data[0]; // Update to access the first item in the "data" array
    } catch (error) {
      throw new Error("Failed to fetch byte data.");
    }
  }
);

// Create the byte slice
const ByteSlice = createSlice({
  name: "byte",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchByteData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchByteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and reducer
// export { fetchByteData };
export default ByteSlice.reducer;
