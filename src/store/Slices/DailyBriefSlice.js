import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDailyBrief = createAsyncThunk(
  "dailyBrief/fetchDailyBrief",
  async () => {
    try {
      const selectedCity = localStorage.getItem("selectedCity");
      if (selectedCity == "All" || selectedCity == null || selectedCity == "") {
        const response = await fetch(
          `https://api2.cityscope.media/dailynews?city=All`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      } else {
        const response = await fetch(
          `https://api2.cityscope.media/dailynews?city=${selectedCity}`,

          {
            method: "GET",
            headers: { chocco: "banna" },
          }
        );
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw new Error("Error fetching dailynews");
    }
  }
);

const dailyBriefSlice = createSlice({
  name: "dailyBrief",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDailyBrief.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchDailyBrief.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchDailyBrief.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectDailyBrief = (state) => state.DailyBrief;

export default dailyBriefSlice.reducer;
