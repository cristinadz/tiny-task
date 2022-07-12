import React, {useState, useEffect} from 'react'
import FavoriteCard from '../components/FavoriteCard'

function FavoriteList() {
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        fetch("/favorited_activities/")
          .then((r) => r.json())
          .then(setFavorites);
      }, []);

      const favoriteCards = favorites.map( (favorite) => 
      <FavoriteCard favorite = { favorite } />
  )
  return (
    <div>{favoriteCards}</div>
  )
}

export default FavoriteList