import React, {useState, useEffect} from 'react'
import FavoriteCard from '../components/FavoriteCard'

function FavoriteList() {
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        fetch("/favorited_activities")
          .then((r) => r.json())
          .then(setFavorites);
      }, []);

  function deleteFavorite(id){
  const updatedFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(updatedFavorites)
  }

      const favoriteCards = favorites.map( (favorite) => 
      <FavoriteCard favorite = { favorite } deleteFavorite={deleteFavorite}/>
  ) 

  return (
    <div>{favoriteCards}</div>
  )
}

export default FavoriteList