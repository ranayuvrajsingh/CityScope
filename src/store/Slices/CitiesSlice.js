import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  try {
    const response = await fetch("https://api2.cityscope.media/cities", {
      method: "GET",
      headers: { chocco: "banna" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching cities");
  }
});

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectCities = (state) => state.Cities;

export default citiesSlice.reducer;
