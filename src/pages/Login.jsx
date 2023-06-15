import React from "react";
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput type="text" placeholder="Your login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Send</MyButton>
      </form>
    </div>
  );
};

export default Login;
