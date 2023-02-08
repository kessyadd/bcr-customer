import React from "react";
import { Outlet } from "react-router-dom";
import Layouts from "../components/Layouts";

const PublicRoute = () => {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
};

export default PublicRoute;
