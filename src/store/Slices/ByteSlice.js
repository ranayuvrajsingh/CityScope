import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBytes = createAsyncThunk("fetchBytes", async () => {
  const response = await fetch("https://api2.cityscope.media/bytes", {
    method: "GET",
    headers: { chocco: "banna" },
  });
  const data = await response.json();
  return data;
  // return response.json();
});

//https://jsonplaceholder.typicode.com/todos
//   https://api2.cityscope.media/bytes

const ByteSlice = createSlice({
  name: "byte",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBytes.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBytes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchBytes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectBytes = (state) => state.Byte;

export default ByteSlice.reducer;
