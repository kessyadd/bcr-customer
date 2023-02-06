import { combineReducers } from "@reduxjs/toolkit";
import searchCar from "./searchCarSlice";

const rootReducer = combineReducers({
  searchCar,
});

export default rootReducer;
