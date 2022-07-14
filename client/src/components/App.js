import React, { useEffect, useState } from 'react';
import './App.css';
import Login from '../pages/Login';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import ActivityList from '../pages/ActivityList';
import FavoriteList from '../pages/FavoriteList';
import { Box } from '@chakra-ui/react';
import Profile from '../pages/Profile';
import EditProfilePage from '../pages/EditProfilePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
        <Route path='/home' element={<ActivityList />}/>
        <Route path='/favorites' element={<FavoriteList  />}/>
        <Route path='/profile' element={<Profile user={user} setUser={setUser}  />}/>
        <Route path='/edit_profile' element={<EditProfilePage user={user} setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
