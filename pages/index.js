import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import Pomodoro from '../components/Pomodoro';

const Index = () => {
  useEffect(() => {
    window.localStorage.setItem('isLoggedIn', false);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center">
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="93vh"
      >
        <Pomodoro />
      </Flex>
    </Flex>
  );
};

export default Index;
