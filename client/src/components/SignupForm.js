import React, { useState } from 'react';

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label name='username'>Username</label>
      <input
        type='text'
        id='new_username'
        autoComplete='off'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label name='email'>Email</label>
      <input
        type='text'
        id='email'
        autoComplete='off'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label name='password'>Password</label>
      <input
        type='password'
        id='new_password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='current-password'
      />
      <label name='password'>Password Confirmation</label>
      <input
        type='password'
        id='password_confirmation'
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete='current-password'
      />

      <button type='submit'>Sign Up</button>

      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </form>
  );
}

export default SignupForm;
