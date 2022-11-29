import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
     <Button onClick={onOpen} colorScheme='purple' top='4' left='4' borderRadius='full'  zIndex={"10"} > 
        <BiMenuAltLeft size='15'/>
     </Button>

     <Drawer isOpen={isOpen}
        placement='left'
        onClose={onClose}
        >
        <DrawerOverlay   >
            <DrawerContent>
                <DrawerHeader> Video Hub</DrawerHeader>
            <DrawerCloseButton  onClick={onClose} />
            <DrawerBody>
                <VStack 
                alignItems='flex-start'
                
                >
                    <Button onClick={onClose} variant='ghost' colorSchme='purple'>
                        <Link to="/"> Home</Link>
                    </Button>

                    <Button onClick={onClose} variant='ghost' colorSchme='purple'>
                        <Link to="/videos"> Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant='ghost' colorSchme='purple'>
                        <Link to="/videos?category=free"> Free Videos</Link>
                    </Button>
                    
                    <Button onClick={onClose} variant='ghost' colorSchme='purple'>
                        <Link to="/upload"> Upload Videos</Link>
                    </Button>

                    


                    
                </VStack>

                <HStack 
                    pos={"absolute"}
                    bottom={"10"}
                    left={"0"}
                    w={"full"}
                    justifyContent={"space-evenly"}
                    >
                        <Button onClick={onClose} colorScheme={'purple'} >
                            <Link to="/login"> Login</Link>
                        </Button>

                        <Button onClick={onClose}  variant={'outline'}>
                            <Link to="/signUp"> SignUp</Link>
                        </Button>
                </HStack>        

            </DrawerBody>

                
            </DrawerContent>
        </DrawerOverlay>
     </Drawer>
    </>
  )
}

export default Header