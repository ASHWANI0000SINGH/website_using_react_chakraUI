import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"upperCase",
    p:"4"

}

const Home = () => {
  return (
    <Box position={"relative"} top={"-10"}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w="full" h={'100vh'}>
          <Image src={img1} />
          <Heading  color={"white"} backgroundColor={"blackAlpha.600"} {...headingOptions}>Watch The Future</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src={img2} />
          <Heading color={"white"} backgroundColor={"whiteAlpha.600"} {...headingOptions}>Future Is Gaming</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src={img3} />
          <Heading color={"white"} backgroundColor={"blackAlpha.600"}  {...headingOptions}> Gaming on Console </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src={img4} />
          <Heading  color={"white"} backgroundColor={"blackAlpha.600"} {...headingOptions}>Night Life is Cool</Heading>
        </Box>
      </Carousel>

      <Container maxW={"container.x1"} minH={"100vh"} p="16">
        <Heading py="2" w="fit-content" border-bottom={"2px solid"} m="auto">Services</Heading>

        <Stack
        h="full"
        p="4"
        alignItems={"center"}
        direction={["column","row"]}
        >
            <Image src={img5} 
            filter={"hue-rotate(-120deg)"}
            h={["40","400"]}
            />

            <Text letterSpacing={"widest"} lineHeight="190%" p={["4","16"]} textAlign="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quos possimus rem voluptatum qui, fuga at perferendis libero nostrum nobis architecto molestiae ab aspernatur cum distinctio hic recusandae nisi sunt velit et nesciunt explicabo corporis iusto! Quae aperiam aliquam, eveniet magnam nobis id consequuntur, ducimus placeat inventore possimus asperiores non illum commodi soluta cum repudiandae quibusdam. Quo impedit distinctio, perspiciatis, reprehenderit numquam officia eveniet facere adipisci dicta neque sequi? Unde officia recusandae ab quis accusantium quasi perspiciatis, facilis sequi alias impedit tempora voluptas saepe! Excepturi vel atque ea ad harum. Deserunt minima eum ad saepe necessitatibus dolore dolorem labore recusandae.</Text>

        </Stack>

      </Container>


    </Box>
  );
};

export default Home;
