import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";
import { AuthContext } from "../context/context";

const AppRouter = () => {
  // const isAuth = false;
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} key={route.path} element={route.element} exact={route.exact} />
      ))}{" "}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} key={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  );
};

export default AppRouter;
