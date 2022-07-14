import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then(navigate("/home"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="new_username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                id="new_username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type='text'
                    id='email'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
              />
              </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="new_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password Confirmation</FormLabel>
              <Input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"} type="submit">
                Sign in
              </Button>
              <Alert status="error" borderRadius={4}>
                <AlertIcon />
                <AlertDescription>
                  {errors.map((err) => (
                    <p>{err}</p>
                  ))}
                </AlertDescription>
              </Alert>
            </Stack>
          </Stack>
        </Flex>
        {/* <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        }
      />
    </Flex> */}
      </Stack>
    </form>

    // <form onSubmit={handleSubmit}>
    //   <label name='username'>Username</label>
    //   <input
    //     type='text'
    //     id='new_username'
    //     autoComplete='off'
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <label name='email'>Email</label>
    //   <input
    //     type='text'
    //     id='email'
    //     autoComplete='off'
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <label name='password'>Password</label>
    //   <input
    //     type='password'
    //     id='new_password'
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     autoComplete='current-password'
    //   />
    //   <label name='password'>Password Confirmation</label>
    //   <input
    //     type='password'
    //     id='password_confirmation'
    //     value={passwordConfirmation}
    //     onChange={(e) => setPasswordConfirmation(e.target.value)}
    //     autoComplete='current-password'
    //   />

    //   <button type='submit'>Sign Up</button>

    //   {errors.map((err) => (
    //     <p key={err}>{err}</p>
    //   ))}
    // </form>
  );
}

export default SignupForm;
