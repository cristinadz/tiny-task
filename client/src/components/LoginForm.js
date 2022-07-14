import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    }).then(navigate("/home"))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label name='username'>Username</label>
      <input
        type='text'
        id='username'
        autoComplete='off'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label name='password'>Password</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='current-password'
      />

      <button type='submit'>Login</button>

      {errors.map((err) => (
          <p>{err}</p>
        ))}
    </form>
  );
}

export default LoginForm;
