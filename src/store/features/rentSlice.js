import { createSlice } from "@reduxjs/toolkit";

export const STEPS = {
  SELECT_DATE: "SELECT_DATE",
  SELECT_METHOD: "SELECT_METHOD",
  CONFIRM_PAYMENT: "CONFIRM_PAYMENT",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
};

const initialState = {
  step: STEPS.SELECT_DATE,
  startDate: "",
  endDate: "",
  carID: null,
  totalDays: 0,
  totalPrice: 0,
  orderID: null,
  payload: {
    method: "",
    invoice: null,
    dateRange: null,
  },
  carData: null,
};

const paymentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {
    setCarData: (state, action) => {
      state.carData = action.payload;
    },
    setDateRange: (state, action) => {
      state.payload.dateRange = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setMethod: (state, action) => {
      state.payload.method = action.payload;
    },
    setInvoice: (state, action) => {
      state.payload.invoice = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setCarID: (state, action) => {
      state.carID = action.payload;
    },
    setTotalDays: (state, action) => {
      state.totalDays = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setOrderID: (state, action) => {
      state.orderID = action.payload;
    },
  },
});

export const {
  setCarData,
  setDateRange,
  setStep,
  setMethod,
  setInvoice,
  setStartDate,
  setEndDate,
  setCarID,
  setTotalDays,
  setTotalPrice,
  setOrderID,
} = paymentSlice.actions;
export default paymentSlice.reducer;

export const selectStepPayment = (state) => state.rent.step;
export const selectCarData = (state) => state.rent.carData;
