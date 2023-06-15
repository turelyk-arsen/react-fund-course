import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}{" "}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  );
};

export default AppRouter;
