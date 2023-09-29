// Replace this with your actual API endpoint and login logic
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const checkLoginCredentials = async (email, password) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Handle non-2xx response status codes
      throw new Error("Invalid response");
    }

    const data = await response.json();
    return data.isLoggedIn; // Assuming the API returns { isLoggedIn: true/false }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("An error occurred during login");
  }
};
