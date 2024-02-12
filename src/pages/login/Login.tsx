import React, { useState } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { loginUser } from "../../store/actions/authActions";
import { AppDispatch } from "../../store/index";
=======
import {login } from "../../store/slices/authSlice";
import { AppDispatch } from "../../store/store";
>>>>>>> 5aa6d5c9ddac2e0aee3a010a39f609f9084c1bed
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData)).then(() => {
      navigate("/platform");
    });
    console.log("login", email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Şifre*"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Giriş Yap</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
