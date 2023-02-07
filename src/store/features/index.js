import { combineReducers } from "@reduxjs/toolkit";
import searchCar from "./searchCarSlice";
import rent from "./rentSlice";

const rootReducer = combineReducers({
  searchCar,
  rent,
});

export default rootReducer;
