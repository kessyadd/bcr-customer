import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ButtonCariMobil = () => {
  return (
    <Button variant="success" className="fw-bolder" as={Link} to="/cari-mobil">
      Mulai Sewa Mobil
    </Button>
  );
};

export default ButtonCariMobil;
