import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layouts from "../components/Layouts";
import Auth from "../utils/Auth";

function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;
  let path = "/sign-in";
  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`;
  }

  if (Auth.isAuthorization())
    return (
      <Layouts>
        <Outlet />
      </Layouts>
    );

  return <Navigate to={path} />;
}

export default PrivateRoute;
