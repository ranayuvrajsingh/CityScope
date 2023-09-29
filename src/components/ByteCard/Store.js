import { configureStore } from "@reduxjs/toolkit";
import ByteReducer from "src/components/ByteCard/ByteSlice.js";

const Store = configureStore({
  reducer: {
    byte: ByteReducer,
  },
});

export default Store;
