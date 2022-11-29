import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
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
          <Heading alignSelf={"center"}> Video Hub</Heading>
          <Avatar  alignSelf={"center"}></Avatar>

          <Input
            placeholder="Name"
            required
            type={'text'}
            focusBorderColor="purple.500"
          ></Input>

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

          {/* <Button variant={'link'} alignSelf="flex-end">
            {' '}
            <Link to="/forgetPassword"> Forget Password</Link>
          </Button> */}
          <Button type="submit" colorScheme={'purple'}>
            {' '}
            SignUp
          </Button>

          <Text textAlign={'right'}>
            {' '}
            Already an User?
            <Button variant={'link'} colorScheme="purple">
            <Link to="/login"> LogIn</Link>

            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
