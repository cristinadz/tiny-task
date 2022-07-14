import React, { useEffect, useState } from 'react';
import './App.css';
import Login from '../pages/Login';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import ActivityList from '../pages/ActivityList';
import FavoriteList from '../pages/FavoriteList';
import {Box} from "@chakra-ui/react";


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

  const basicBoxStyles = {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    boxSize: '250px',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background:
      'url(https://picsum.photos/id/1080/200/300)',
  }
  
  return (
  
    <div className='App'>
      
    <Box sx={basicBoxStyles}  >
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/home' element={<ActivityList />}/>
        <Route path='/favorites' element={<FavoriteList  />}/>
      </Routes>
      </Box>
     
    </div>
  );
}

export default App;
