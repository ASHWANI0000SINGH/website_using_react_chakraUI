import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend,AiFillGithub,AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor={'blackAlpha.900'} minH="40" p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px="4">
          <Heading size="md">Subscribe to get Updates</Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
              placeholder="Enter Email here"
            ></Input>
            <Button
              p="0"
              colorScheme={'purple'}
              variant="ghost"
              borderRadius={'0 20px 20px 0'}
            >
              {' '}
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w="full"
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading>Video Hub</Heading>
          <Text>@all Right Reserved</Text>
        </VStack>

        <VStack
          w="full"
        >
          <Heading  size="md">Follow Us</Heading>
          <Button color="white" variant={"link"} >
            <a href="https:instagram.com/singhashwanikumar79"><AiFillInstagram/></a>
          </Button>
          <Button color="white"variant={"link"} >
          <a href="https:twitter.com/@ashwani74508943"><AiFillTwitterCircle/></a>
          </Button>
          <Button color="white"  variant={"link"}>
          <a href="https://github.com/ASHWANI0000SINGH"><AiFillGithub/></a>

          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
