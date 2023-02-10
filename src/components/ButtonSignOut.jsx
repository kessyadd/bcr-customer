import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";

const ButtonSignOut = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="success"
      className="fw-bolder mx-1"
      onClick={() => Auth.logOut(navigate)}
    >
      Sign Out
    </Button>
  );
};

export default ButtonSignOut;
