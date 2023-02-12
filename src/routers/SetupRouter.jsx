import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import CariMobil from "../pages/CariMobil";
import HasilPencarian from "../pages/HasilPencarian";
import DetailMobil from "../pages/DetailMobil";
import SignIn from "../pages/SignIn";
import Payment from "../pages/Payment";
import SignUp from "../pages/SignUp";
import PublicRoute from "./PublicRoute";
import Tiket from "../pages/Tiket";

const SetupRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/payment/:orderId" element={<Payment />} />
            <Route path="/e-tiket" element={<Tiket />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" index element={<Home />} />
            <Route path="/cari-mobil" element={<CariMobil />} />
            <Route path="/hasil-pencarian" element={<HasilPencarian />} />
            <Route path="/detil-mobil/:carId" element={<DetailMobil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SetupRouter;
