import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
