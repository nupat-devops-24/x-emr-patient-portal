import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy validation: just check if fields are filled
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }

    // Call login() without a real token/user
    login();  // since your current context has no parameters
    navigate("/");
  };

  return (
    <div
      className="bg-secondary"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <form onSubmit={handleSubmit} className="card" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-primary mb-2">Login</h2>

        {error && <div className="alert alert-danger mb-2">{error}</div>}

        <div className="mb-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
