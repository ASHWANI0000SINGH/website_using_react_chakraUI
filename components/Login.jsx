import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <Container maxW={'container.xl'} h="100vh" p="16">
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing="8"
          w={['full', '96']}
          m="auto"
          my="16"
        >
          <Heading> Welcome Back</Heading>
          <Input
            placeholder="Email"
            required
            type={'email'}
            focusBorderColor="purple.500"
          ></Input>
          <Input
            placeholder="Password"
            required
            type={'password'}
            focusBorderColor="purple.500"
          ></Input>
          <Button variant={'link'} alignSelf="flex-end">
            {' '}
            <Link to="/forgetPassword"> Forget Password</Link>
          </Button>
          <Button type="submit" colorScheme={'purple'}>
            {' '}
            Login
          </Button>

          <Text textAlign={'right'}>
            {' '}
            New User?
            <Button variant={'link'} colorScheme="purple">
            <Link to="/signUp"> SignUp</Link>

            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
