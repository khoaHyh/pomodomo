import { Box, Button, Flex, IconButton, Stack, Image } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react';
export const Navbar = props => {
  const [isMobile] = useMediaQuery('(min-width:800px)');
  console.log(isMobile);

  //<Flex w={['100vw', '100vw', '80vw', '80vw']} justify='end' align='center' px='4'>
  //    <Stack spacing='5' isInline align='center' >
  //        <IconButton position='relative' icon={<SunIcon />}></IconButton>
  //        {[> LOGIN/SIGNUP <]}
  //        {isMobile && <Button position='relative'>Login</Button>}
  //        {isMobile && <Button position='relative'> Sign Up</Button>}
  //    </Stack>
  //</Flex>

  return (
    <Flex
      w="100vw"
      bg="green.400"
      h="6vh"
      justify="center"
      align="center"
      box-shadow="xl"
      fontSize={['md', 'xl', 'xl', 'xl']}
      boxShadow="md"
    >
      {/* LOGO */}
      <Stack isInline align="center" px="4" as="button">
        <Image
          align="center"
          boxSize={['36px', '48px', '48px', '48px']}
          fallbackSrc="./images/tomato.png"
        />
        <Box fontWeight="semibold">Pomodomo</Box>
      </Stack>
      {/* BUTTONS */}
    </Flex>
  );
};

