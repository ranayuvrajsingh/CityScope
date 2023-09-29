import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChannels = createAsyncThunk(
  "channels/fetchChannels",
  async () => {
    try {
      const response = await fetch("https://api2.cityscope.media/channels", {
        method: "GET",
        headers: { chocco: "banna" },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching cities");
    }
  }
);

const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchChannels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchChannels.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const selectChannels = (state) => state.Channels;

export default channelsSlice.reducer;
