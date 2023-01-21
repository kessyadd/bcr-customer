import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: [],
  carData: [],
};

const searchCarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    filters: (state, action) => {
      state.filterData.pop();
      state.filterData.push(action.payload);
    },
    searchCar: (state, action) => {
      if (state.carData) state.carData.pop();
      state.carData.push(action.payload);
    },
  },
});

export const { filters, searchCar } = searchCarSlice.actions;
export default searchCarSlice.reducer;
