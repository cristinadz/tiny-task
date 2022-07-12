import { useEffect, useState } from "react";

function FavoriteCard({ favorite, deleteFavorite }) {
  function handleDelete(id) {
    fetch(`/favorited_activities/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteFavorite(id);
      }
    });
  }

  console.log(favorite);
  return (
    <div>
      <h3> {favorite.activity.name} </h3>
      <img alt="activity" src={favorite.activity.image} />
      <p> category: {favorite.activity.category.name} </p>
      <button onClick={() => handleDelete(favorite.id)}>Delete</button>
    </div>
  );
}

export default FavoriteCard;
