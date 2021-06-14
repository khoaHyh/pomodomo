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
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { LoginModal } from './authentication/login/LoginModal';
export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#db524d', '#33332d');
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [isMobile] = useMediaQuery('(min-width:800px)');
  // console.log(isMobile);

  const handleModal = () => {
    onOpen();
  };

  return (
    <Flex
      w="100%"
      h="6vh"
      box-shadow="xl"
      fontSize={['md', 'xl', 'xl', 'xl']}
      // boxShadow="md"
      justify="space-between"
      py={8}
    >
      {/* LOGO */}
      <Link href="/">
        <Stack isInline align="center" pl="4" spacing="4" userSelect='none'>
          <Image
            align="center"
            boxSize={['36px', '48px', '48px', '48px']}
            fallbackSrc="./images/tomato.png"
          />
          <Box fontWeight="semibold">Pomodomo</Box>
        </Stack>
      </Link>

      {/* BUTTONS */}

      <Stack spacing="4" isInline align="center" pr="4">
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
