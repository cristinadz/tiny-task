import React from "react";

function FavoriteCard({ favorite, deleteFavorite, updateFavorite }) {

const { id, completed: isCompleted } = favorite 

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

  function handleIsCompleted() {
    fetch(`/favorited_activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !isCompleted }),
    })
      .then((r) => r.json())
      .then((updatedFavorite) => {
        updateFavorite(updatedFavorite);
      });
  }


  console.log(favorite.completed);

  return (
    <div>
      <h3> {favorite.activity.name} </h3>
      <img alt="activity" src={favorite.activity.image} />
      <p> category: {favorite.activity.category.name} </p>
      <button onClick={handleIsCompleted}> {isCompleted ? "mark as complete" : "mark as uncomplete"} </button>
      <button onClick={() => handleDelete(favorite.id)}>Delete</button>
    </div>
  );
}

export default FavoriteCard;
