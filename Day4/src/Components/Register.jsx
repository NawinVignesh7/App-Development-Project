import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Register.css';

function Register({ setLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password,
        role,
        username: 'Nawin Vignesh' // Default username for simplicity
      });

      const userData = response.data;
      setLoggedIn(true);
      setUser(userData);
      navigate(role === 'admin' ? '/admin/dashboard' : '/profile');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-item">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-item">
            <label>Password:</label>
            <div className="password-container">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} 
                className="password-icon" 
                onClick={togglePasswordVisibility} 
              />
            </div>
          </div>
          <div className="input-item">
            <label>Confirm Password:</label>
            <div className="password-container">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
              <FontAwesomeIcon 
                icon={showConfirmPassword ? faEyeSlash : faEye} 
                className="password-icon" 
                onClick={toggleConfirmPasswordVisibility} 
              />
            </div>
          </div>
          <div className="input-item">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="social-icons">
        <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
      </div>
      <p className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
