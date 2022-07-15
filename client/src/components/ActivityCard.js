import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function ActivityCard({ activity }) {
  function handleAddFavorite(e) {
    let id = e.target.value;

    fetch('/favorited_activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  }

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
          bg={'white'}
        >
          <Center>
            <Image
              h={'210px'}
              src={activity.image}
              mt={-6}
              mx={-6}
              mb={6}
            ></Image>
          </Center>
          <Stack>
            <Text
              color={'pink.300'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {activity.category.name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {activity.name}
            </Heading>
          </Stack>
          <Stack>
            <Stack direction={'column'} fontSize={'sm'}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Read more
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{activity.description}</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
                onClick={handleAddFavorite}
                value={activity.id}
                bg={'yellow.200'}
              >
                {' '}
                Favorite 💟{' '}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export default ActivityCard;
