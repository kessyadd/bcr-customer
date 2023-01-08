import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonSignIn = () => {
  return (
    <Button
      variant="outline-success"
      className="fw-bolder mx-1"
      as={Link}
      to="/sign-in"
    >
      Sign In
    </Button>
  );
};

export default ButtonSignIn;
