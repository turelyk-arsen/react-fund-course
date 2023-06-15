import React, { useContext } from "react";
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import { AuthContext } from "../context/context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Your login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Send</MyButton>
      </form>
    </div>
  );
};

export default Login;
