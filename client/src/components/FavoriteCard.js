import React from 'react'

function FavoriteCard({favorite}) {
 console.log(favorite)
  return (
    <div>
        <h3> {favorite.activity.name} </h3>
        <img alt='activity' src={favorite.activity.image} />
        <p> category: {favorite.activity.category} </p>
    </div>
  )
}

export default FavoriteCard