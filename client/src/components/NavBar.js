import React from 'react'

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
            NAVBAR
        <button onClick={handleLogoutClick}>
          Logout
        </button>
    </div>
  )
}

export default NavBar