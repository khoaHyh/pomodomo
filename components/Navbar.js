import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Stack,
  Image,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
//import { Box, Button, Flex, IconButton, Stack, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#db524d', '#33332d');
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

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
      h="6vh"
      justify="center"
      align="center"
      box-shadow="xl"
      fontSize={['md', 'xl', 'xl', 'xl']}
      boxShadow="md"
    >
      {/* LOGO */}
      <Stack isInline align="center" m={0} px="4">
        <Image
          align="center"
          boxSize={['36px', '48px', '48px', '48px']}
          fallbackSrc="./images/tomato.png"
        />
        <Box fontWeight="semibold">Pomodomo</Box>
      </Stack>
      <Spacer />
      {/* BUTTONS */}
      <Flex
        w={['100vw', '100vw', '80vw', '80vw']}
        justify="end"
        align="center"
        px="4"
      >
        <Stack spacing="5" isInline align="center">
          <IconButton
            bg={bg}
            aria-label={`Switch to ${text} mode`}
            position="relative"
            icon={<SwitchIcon />}
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>
    </Flex>
  );
};
