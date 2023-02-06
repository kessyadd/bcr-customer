import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: [],
  carData: [],
  fetchStat: "loading",
  page: 1,
  pageCount: 1,
  changePageStat: false,
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
    resetCar: (state, action) => {
      if (state.carData) state.carData.pop();
    },
    fetchStatus: (state, action) => {
      state.fetchStat = action.payload;
    },
    setPage: (state, action) => {
      state.changePageStat = true;
      state.page = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export const {
  filters,
  searchCar,
  resetCar,
  fetchStatus,
  setPage,
  setPageCount,
} = searchCarSlice.actions;
export default searchCarSlice.reducer;
