import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APICar from "../../apis/customer/APICar";

export const fetchSearchCars = createAsyncThunk(
  "fetch/searchCars",
  async (params) => {
    try {
      const result = await APICar.getCarList(params);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  filterData: [],
  page: 1,
  pageCount: 1,
  changePageStat: false,
  data: null,
  status: "idle",
};

const searchCarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    filters: (state, action) => {
      state.filterData.pop();
      state.filterData.push(action.payload);
    },
    setPage: (state, action) => {
      state.changePageStat = true;
      state.page = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchCars.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = "succeeded";
    });
    builder.addCase(fetchSearchCars.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(fetchSearchCars.pending, (state, action) => {
      state.error = action.payload;
      state.status = "loading";
    });
  },
});

export const { filters, searchCar, setPage, setPageCount } =
  searchCarSlice.actions;
export default searchCarSlice.reducer;
