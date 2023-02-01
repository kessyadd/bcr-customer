import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import CariMobil from "./pages/CariMobil";
import HasilPencarian from "./pages/HasilPencarian";
import DetailMobil from "./pages/DetailMobil";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import { Container } from "react-bootstrap";
import SignIn from "../pages/SignIn";

const SetupRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={PrivateRoute}>
              {/* <Route path="/payment" element={<Payment />} /> */}
            </Route>
            <Route path="/" element={ProtectedRoute}>
              {/* <Route path="/sign-in" element={<SignIn />} /> */}
              {/* <Route path="/sign-up" element={<SignUp />} /> */}
            </Route>
            <Route exact path="/" element={<Home />} />
            <Route path="/cari-mobil" element={<CariMobil />} />
            <Route path="/hasil-pencarian" element={<HasilPencarian />} />
            <Route path="/detil-mobil/:carId" element={<DetailMobil />} />
          </Routes>
        </Container>
        <Foot />
      </BrowserRouter>
    </>
  );
};

export default SetupRouter;
