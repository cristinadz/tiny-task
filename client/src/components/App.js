import React, { useEffect, useState } from 'react';
import './App.css';
import Login from '../pages/Login';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user = {user} setUser= {setUser} />
      <Login />
    </div>
  );
}

export default App;
