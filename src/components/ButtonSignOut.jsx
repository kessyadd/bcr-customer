import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonSignOut = () => {
  return (
    <Button
      variant="success"
      className="fw-bolder mx-1"
      as={Link}
      to="/sign-in"
    >
      Sign Out
    </Button>
  );
};

export default ButtonSignOut;
