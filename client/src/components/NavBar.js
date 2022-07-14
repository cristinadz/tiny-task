import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, HStack, Button, Stack } from '@chakra-ui/react';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Box bg={'gray.100'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box fontFamily={'Annie Use Your Telescope'}>TinyTask</Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/home'>Home</Link>
          </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/favorites'>Favorites</Link>
          </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/profile'>Profile</Link>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            as={Button}
            rounded={'full'}
            cursor={'pointer'}
            minW={0}
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
