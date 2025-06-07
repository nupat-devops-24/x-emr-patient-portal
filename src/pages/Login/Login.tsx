import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // mock login logic
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to EMR Dashboard</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
