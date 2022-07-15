import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <>
      <Container maxW={"3xl"} fontFamily={"Annie Use Your Telescope"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontFamily={"Annie Use Your Telescope"}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            TinyTask <br />
            <Text as={"span"} color={"orange.400"}>
              activities for kids!
            </Text>
          </Heading>
          
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
          >
           
              {isLogin ? (
                <>
                  <LoginForm onLogin={onLogin} />
                  <Text color={"black"} bg={"white"}>
                    Don't have an account? &nbsp;
                    <Button color="black" onClick={() => setIsLogin(false)}>
                      Sign Up
                    </Button>
                  </Text>
                </>
              ) : (
                <>
                  <SignupForm onLogin={onLogin} />

                  <Text color={"black"} bg={"white"}>
                    Already have an account? &nbsp;
                    <Button color="black" onClick={() => setIsLogin(true)}>
                      Log In
                    </Button>
                  </Text>
                </>
              )}

             
            <Box>
              
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Login;
