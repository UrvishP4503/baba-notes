import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      email: (document.getElementById("username") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      username: (document.getElementById("username") as HTMLInputElement).value,
    });
    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/login",
        { user },
        {
          withCredentials: true,
        },
      );

      if (res.status === 200) {
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(`error`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form action="#" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </form>
        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
