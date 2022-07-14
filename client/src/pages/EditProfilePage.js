import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';


function EditProfilePage({ user, setUser }) {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
		username: user.username,
		email: user.email,
		profile_img: user.profile_img,
	});

function handleFormChange(e){
	setProfileData( profileData => ({
		...profileData, [e.target.name]: e.target.value
	}))
}

async function handlePatchProfile(e){
	e.preventDefault()

	const res = await fetch(`/users/${user.id}`,{
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(profileData)
	})

	if (res.ok){
		res.json()
		.then( updatedUser => {
			setUser( updatedUser )
		}).then(navigate("/profile"))
	}
}

return (

<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack 
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading fontFamily  lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          edit profile
        </Heading>
<form onSubmit={ handlePatchProfile } >
       <FormControl isRequired mt={3} > 
          <FormLabel>username</FormLabel>
          <Input
          	type="text"
            name="username"
            autoComplete="off"
            value={profileData.username}
            onChange={handleFormChange}
            textColor={ 'gray.800 '}
          />
        </FormControl>
        <FormControl isRequired mt={3}>
          <FormLabel >email address</FormLabel>
          <Input
			type="text"
			name="email"
			autoComplete="off"
			value={profileData.email}				
            onChange={handleFormChange}
          />
        </FormControl>
        <FormControl mt={3}> 
          <FormLabel>image url</FormLabel>
          <Input
			type="text"
			name="profile_img"
			autoComplete="off"
			value={profileData.profile_img}			
            onChange={handleFormChange}
          />
        </FormControl>
        <Stack mt={4} spacing={6} direction={['column', 'row']}>
          <Button
          as={Link} to='/profile'
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            cancel
          </Button>
          <Button
          type='submit'
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            save
          </Button>
        </Stack>
        
        </form>
      </Stack>
    </Flex>
  )
}

export default EditProfilePage