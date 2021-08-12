import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SunIcon, MoonIcon, RepeatClockIcon } from '@chakra-ui/icons';
import { LoginModal } from './authentication/login/LoginModal';
import { useEffect, useRef, useState } from 'react';
import { logoutUser } from './authentication/authUtils';
import { getUsername } from './userProfile/profileUtils';
import { UserBox } from './userProfile/UserBox';
export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', '#33332d');
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getLoginBool, setLoginBool] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    // onload set login to false
    const landingSession =
      JSON.parse(window.localStorage.getItem('isLoggedIn')) === null
        ? false
        : JSON.parse(window.localStorage.getItem('isLoggedIn'));
    setLoginBool(landingSession);
  }, [isOpen, onOpen, onClose, getLoginBool, setLoginBool]);

  const handleModal = () => {
    // handles the opening of login/register modal
    onOpen();
  };

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      window.localStorage.setItem('isLoggedIn', false);
      setLoginBool(window.localStorage.getItem('isLoggedIn'));
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Flex
      w="100%"
      h="6vh"
      box-shadow="xl"
      fontSize={['md', 'xl', 'xl', 'xl']}
      // boxShadow="md"
      justify="space-evenly"
      py={8}
    >
      {/* LOGO */}
      <Link href="/">
        <Stack isInline align="center" pl="4" spacing="4" userSelect="none">
          <Image
            align="center"
            boxSize={['36px', '48px', '48px', '48px']}
            fallbackSrc="./images/tomato.png"
          />
          <Box fontWeight="semibold">Pomodomo</Box>
        </Stack>
      </Link>

      {/* BUTTONS */}

      <Stack spacing={[2, 3, 4]} isInline align="center" pr="4">
        {/* User data button */}
        {getLoginBool && (
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Button id="profile-button" bg="blackAlpha.900">{getUsername()}</Button>
            </PopoverTrigger>
            <PopoverContent w="75%">
              <PopoverArrow />
              <PopoverHeader fontWeight="bold">
                {getUsername()}
                <IconButton
                  onClick={async () => {
                    await userRef.current.getValues();
                  }}
                  icon={<RepeatClockIcon />}
                ></IconButton>
              </PopoverHeader>
              <UserBox ref={userRef} />
            </PopoverContent>
          </Popover>
        )}
        {/* logout button */}
        {getLoginBool && (
          <Button bg={bg} position="relative" onClick={handleLogout}>
            Logout
          </Button>
        )}
        {/* Login button */}
        {!getLoginBool && (
          <Button bg={bg} position="relative" onClick={handleModal}>
            Login
          </Button>
        )}

        {/* Color mode button */}
        <IconButton
          bg={bg}
          aria-label={`Switch to ${text} mode`}
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
        />

        <LoginModal onClose={onClose} isOpen={isOpen} />
      </Stack>
    </Flex>
  );
};
