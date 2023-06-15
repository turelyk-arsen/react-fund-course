import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links__" to="/about">
          About
        </Link>
        <Link className="navbar__links__" to="/posts">
          Posts
        </Link>
      </div>
      <h1 className="navbar__links___">REACT</h1>
      <MyButton onClick={logout}>Log OUT</MyButton>
    </div>
  );
};

export default Navbar;
