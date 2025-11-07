import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login condition (dummy credentials)
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid credentials ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>🔐 Login Page</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fafafa",
        }}
      >
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default Login;
