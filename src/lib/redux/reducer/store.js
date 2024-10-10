import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../store/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
