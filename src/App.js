import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CariMobil from "./pages/CariMobil";
import HasilPencarian from "./pages/HasilPencarian";
import DetailMobil from "./pages/DetailMobil";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container fluid className="p-0">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cari-mobil" element={<CariMobil />} />
            <Route path="/hasil-pencarian" element={<HasilPencarian />} />
            <Route path="/detil-mobil/:carId" element={<DetailMobil />} />
          </Routes>
        </Container>
        <Foot />
      </Router>
    </>
  );
}

export default App;
