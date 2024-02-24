import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      username: (document.getElementById("username") as HTMLInputElement).value,
    });
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/users/create",
        user,
      );
      console.log(res.status);
    } catch (error) {
      console.log(`error`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form action="#" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </form>

        <p className="login-text">
          {"Have an account? "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
