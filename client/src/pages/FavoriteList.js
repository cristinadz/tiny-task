import React, { useState, useEffect } from "react";
import FavoriteCard from "../components/FavoriteCard";

function FavoriteList() {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    fetch("/favorited_activities")
      .then((r) => r.json())
      .then(setFavorites);
  }, []);

  function deleteFavorite(id) {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  }

  function onUpdatedFavorite(id) {
    const newFavorite = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorite);
  }

  const favoriteCards = favorites.map((favorite) => (
    <FavoriteCard
      favorite={favorite}
      deleteFavorite={deleteFavorite}
      onUpdatedFavorite={onUpdatedFavorite}
    />
  ));

  return <div>{favoriteCards}</div>;
}

export default FavoriteList;
