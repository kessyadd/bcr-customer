import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CariMobil from "./pages/CariMobil";
import HasilPencarian from "./pages/HasilPencarian";
import DetailMobil from "./pages/DetailMobil";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import { Container } from "react-bootstrap";
import Payment from "./pages/Payment";
import { Provider } from "react-redux";
import store from "./store";
import SignIn from "./pages/SignIn";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          {/* <Navigation /> */}
          <Container fluid className="p-0">
            <Routes>
              <Route element={<WithNav />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/cari-mobil" element={<CariMobil />} />
                <Route path="/hasil-pencarian" element={<HasilPencarian />} />
                <Route path="/detil-mobil/:carId" element={<DetailMobil />} />
                <Route path="/payment" element={<Payment />} />
              </Route>
              <Route element={<WithoutNav />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            </Routes>
          </Container>
          <Foot />
        </Router>
      </Provider>
    </>
  );
}

export default App;
