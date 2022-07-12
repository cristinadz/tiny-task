import {useEffect, useState} from 'react'

function FavoriteCard({favorite}) {
const [favorites, setFavorites] = useState([]);

function handleDelete(id) {
  
  fetch(`/favorited_activities/${id}`, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      setFavorites((favorites) => 
      favorites.filter((favorite) => favorite.id !== id)
      );
    }
  });
}

 console.log(favorite)
  return (
    <div>
        <h3> {favorite.activity.name} </h3>
        <img alt='activity' src={favorite.activity.image} />
        <p> category: {favorite.activity.category} </p>
        <button onClick={() => handleDelete(favorite.id)}>Delete</button>
    </div>
  )
}

export default FavoriteCard