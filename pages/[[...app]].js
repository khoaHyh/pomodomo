import React from 'react';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import Pomodoro from '../components/Pomodoro';
import '@fontsource/ibm-plex-mono';

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Mono',
    body: 'IBM Plex Mono',
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" justify="center">
        <Navbar />
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="94vh"
          bg="red.400"
        >
          <Pomodoro />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
