import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login({ handleLogIn }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const handleSubmit = () => {
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res.data);
        handleLogIn("A");
        history.push("/");
      });
  };

  const LoginUser = () => {
    return (
      <div className="loginForm">
        <h2>LOGIN</h2>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="loginBtn"
          type="button"
          value="Submit"
          onClick={handleSubmit}
        ></input>
        <p>
          Don’t have an account?{" "}
          <Link onClick={() => setLogin(false)}>Sign Up Now!</Link>
        </p>
      </div>
    );
  };

  const RegisterUser = () => {
    return (
      <div className="loginForm">
        <h2>Create Account</h2>
        <input type="email" className="input" placeholder="First Name"></input>
        <input
          type="email"
          className="input"
          placeholder="Last Name"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="loginBtn"
          type="button"
          value="Submit"
          onClick={handleSubmit}
        ></input>
        <p>
          Already have an account?{" "}
          <Link onClick={() => setLogin(true)}>Sign In Now!</Link>
        </p>
      </div>
    );
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          {login ? <LoginUser /> : <RegisterUser />}
        </div>
        <div className="loginRight">
          <img src="loginImg.png" />
        </div>
      </div>
    </div>
  );
}

export default Login;
