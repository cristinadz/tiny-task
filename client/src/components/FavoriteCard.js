import { useEffect, useState } from "react";

function FavoriteCard({ favorite, deleteFavorite, onUpdatedFavorite, isCompleted}) {
  function handleUpdate(id) {
    fetch(`/favorited_activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !favorite.completed,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((updateFavorite) =>
          onUpdatedFavorite(updateFavorite)
        );
      }
    });
  }

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

  console.log(favorite.completed);
  return (
    <div>
      <h3> {favorite.activity.name} </h3>
      <img alt="activity" src={favorite.activity.image} />
      <p> category: {favorite.activity.category.name} </p>
      <button onClick={() => handleUpdate(favorite.id)}>{favorite.completed ? "Mark as completed" : "Mark as uncomplete"}</button>
      <button onClick={() => handleDelete(favorite.id)}>Delete</button>
    </div>
  );
}

export default FavoriteCard;
