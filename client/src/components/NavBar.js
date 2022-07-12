import React from 'react'
import {Link} from 'react-router-dom'

function NavBar({user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    

  return (
    <div>
      <nav> 
      
        <Link to="/home">Home</Link> 
        <Link to="/favorites">Favorites</Link> 

        <button onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default NavBar