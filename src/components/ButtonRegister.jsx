import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonRegister = () => {
  return (
    <Button
      variant="success"
      className="fw-bolder mx-1"
      as={Link}
      to="/sign-up"
    >
      Register
    </Button>
  );
};

export default ButtonRegister;
