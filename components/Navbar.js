import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Image,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
//import { Box, Button, Flex, IconButton, Stack, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { LoginModal } from './authentication/login/LoginModal';
export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#db524d', '#33332d');
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(min-width:800px)');
  console.log(isMobile);


  const handleModal = () => {
    onOpen();
  };

  //{isMobile && (
  //  <Button position="relative" onClick={handleModal}>
  //    Login
  //  </Button>
  //)}

  return (
    <Flex
      w="100vw"
      h="6vh"
      box-shadow="xl"
      fontSize={['md', 'xl', 'xl', 'xl']}
      boxShadow="md"
      justify="space-between"
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
      {/* BUTTONS */}

      <Stack spacing="5" isInline align="center" px="4">
        {/* Color mode button */}
        <IconButton
          bg={bg}
          aria-label={`Switch to ${text} mode`}
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
        />
        {/* Login button */}
        <Button position="relative" onClick={handleModal}>
          Login
        </Button>

        <LoginModal onClose={onClose} isOpen={isOpen} />
      </Stack>
    </Flex>
  );
};
