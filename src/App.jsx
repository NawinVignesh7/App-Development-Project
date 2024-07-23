import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('Login:', { email, password });
    setIsLoggedIn(true);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('Register:', { username, email, password });
    alert('Registered successfully');
    setHasAccount(true);
    setIsLogin(true);
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <h2>Welcome Home</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        {isLogin && hasAccount ? (
          <form id="login-form" className="form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <br></br>
            <p>Register if you dont have an account?</p>
          </form>
        ) : (
          <form id="register-form" className="form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Register</button>
            <br></br>
            <p>Login if You already have an account?</p>
          </form>
        )}
        <div id="toggle-container">
          {hasAccount ? (
            <button id="login-toggle" onClick={handleToggle}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          ) : (
            <button id="register-toggle" onClick={() => setHasAccount(true)}>
              Back to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
