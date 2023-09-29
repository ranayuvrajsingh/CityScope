import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    try {
      const selectedCity = localStorage.getItem("selectedCity");
      if (selectedCity == "All" || selectedCity == null || selectedCity == "") {
        const response = await fetch(
          `https://api2.cityscope.media/weathers?city=All`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      } else {
        const response = await fetch(
          `https://api2.cityscope.media/weathers?city=${selectedCity}`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw new Error("Error fetching weathers");
    }
  }
);

const weatherSlice = createSlice({
  name: "Weather",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectweather = (state) => state.weather;

export default weatherSlice.reducer;
