import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk to perform user login
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api2.cityscope.media/users", {
        method: "GET",
        headers: { chocco: "banna" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error during login");
    }
  }
);

// Create the user login slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle actions from the userLogin async thunk
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload || "Error during login";
    });
  },
});

// Export a selector to access the user login state
export const selectUserLogin = (state) => state.user;

// Export the user login reducer
export default userSlice.reducer;
