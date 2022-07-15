import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function Profile({ user }) {
  const { profile_img, username, email } = user;

  return (
    <Center py={10}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'green')}
        boxShadow={'base'}
        rounded={'xl'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'2xl'}
          src={profile_img}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          boxShadow={'base'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {username}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {email}
        </Text>

        <Button
          as={Link}
          to='/edit_profile'
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'green.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{ bg: 'green.500' }}
          _focus={{
            bg: 'green.500',
          }}
        >
          edit
        </Button>
      </Box>
    </Center>
  );
}

export default Profile;
