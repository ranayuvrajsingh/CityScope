import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChannelById = createAsyncThunk(
  "channelById/fetchChannelById",
  async (Id) => {
    try {
      const response = await fetch(
        `https://api2.cityscope.media/channels/${Id}`,
        {
          method: "GET",
          headers: { chocco: "banna" },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching channel with ID ${Id}`);
    }
  }
);

const channelByIdSlice = createSlice({
  name: "channelById",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChannelById.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchChannelById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchChannelById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectCurrentChannel = (state) => state.channelById.data; // Selector for the current channel

export default channelByIdSlice.reducer;
