import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simule a validação de login
    if (email === "admin@123" && password === "123") {
      navigate("/home"); // Redirecione para a página principal ou outra página
    } else {
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="#" className="forgot-password">
          Perdeu a senha? Clique Aqui!
        </a>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
