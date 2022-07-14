import React from 'react';
import { Link } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Center bg='teal' h='100px' color='white'>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/profile'>Profile</Link>
        <button onClick={handleLogoutClick}>Logout</button>
      </nav>
    </Center>
  );
}
export default NavBar;


