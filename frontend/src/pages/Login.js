import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import logo from "../assets/logo.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    const {
      data: { _id },
    } = await api.post("/devs", { username });
    navigate(`dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Type you github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
