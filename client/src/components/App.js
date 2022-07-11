import React, { useEffect, useState } from 'react';
import './App.css';
import Login from '../pages/Login';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className='App'>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login onLogin={setUser} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
