import React, { useState, useEffect } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import { Box, Container, Heading, Stack, Button } from '@chakra-ui/react';

function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/favorited_activities')
      .then((r) => r.json())
      .then(setFavorites);
  }, []);

  function deleteFavorite(id) {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  }

  function handleUpdateFavorite(updatedFavorite) {
    const updatedFavoritesArray = favorites.map((favorite) => {
      return favorite.id === updatedFavorite.id ? updatedFavorite : favorite;
    });
    setFavorites(updatedFavoritesArray);
  }

  const favoriteCards = favorites.map((favorite) => (
    <FavoriteCard
      favorite={favorite}
      deleteFavorite={deleteFavorite}
      updateFavorite={handleUpdateFavorite}
    />
  ));

  return (
    <>
      <Box p={5}>
        <Stack spacing={4} as={Container} maxW={'400px'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>My favorites</Heading>
        </Stack>
      </Box>
      <Container>{favoriteCards}</Container>;
    </>
  );
}

export default FavoriteList;
