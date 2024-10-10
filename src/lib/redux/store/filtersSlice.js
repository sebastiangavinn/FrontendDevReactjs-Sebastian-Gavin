import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    isOpen: false,
    price: "",
    categories: "",
  },
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearFilters: (state) => {
      state.isOpen = false;
      state.price = "";
      state.categories = "";
    },
  },
});

export const { setFilter, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
