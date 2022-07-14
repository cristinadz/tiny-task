import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  Checkbox,
  Spacer,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function FavoriteCard({ favorite, deleteFavorite, updateFavorite }) {
  const { id, completed: isCompleted } = favorite;

  function handleDelete(id) {
    fetch(`/favorited_activities/${id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    }).then((r) => {
      if (r.ok) {
        deleteFavorite(id);
      }
    });
  }

  function handleIsCompleted() {
    fetch(`/favorited_activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
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
    <>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image src={favorite.activity.image} layout={'fill'} />
          </Box>
          <Stack>
            <Text
              color={'blue.300'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {favorite.activity.category.name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {favorite.activity.name}
            </Heading>
          </Stack>
          <Stack>
            <Stack direction={'column'} fontSize={'sm'}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        Read more
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {favorite.activity.description}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Checkbox onChange={handleIsCompleted}> did it! </Checkbox>
              <Spacer />
              <IconButton
                bg={'red.400'}
                aria-label={'delete'}
                onClick={() => handleDelete(favorite.id)}
                icon={<DeleteIcon />}
              />
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export default FavoriteCard;
