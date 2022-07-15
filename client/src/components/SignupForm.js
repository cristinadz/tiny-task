import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .then(navigate('/home'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Box
            bg={useColorModeValue('orange.50', 'orange.400')}
            boxShadow={'lg'}
            rounded={'xl'}
            p={4}
          >
            <Stack spacing={3} mx={'auto'} maxW={'md'}>
              <Stack align={'4'}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                  Create an account
                </Heading>
              </Stack>
              <FormControl id='new_username'>
                <FormLabel>Username</FormLabel>
                <Input
                  type='text'
                  id='new_username'
                  autoComplete='off'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='text'
                  id='email'
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  id='new_password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                  type='password'
                  id='password_confirmation'
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete='current-password'
                />
              </FormControl>
              <Stack spacing={6}>
                {/* <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack> */}
                <Button colorScheme={'blue'} variant={'solid'} type='submit'>
                  Sign in
                </Button>
                <Alert status='error' borderRadius={4}>
                  <AlertIcon />
                  <AlertDescription>
                    {errors.map((err) => (
                      <p>{err}</p>
                    ))}
                  </AlertDescription>
                </Alert>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </form>
  );
}

export default SignupForm;
