import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,

} from '@chakra-ui/react';
import { Navbar } from "./components/Navbar"
import Pomodoro from "./components/Pomodoro";



function App() {
  return (
    <ChakraProvider theme={theme} >
      <Flex direction='column' align='center' justify='center'>
        <Navbar />
        <Flex direction='column' align='center' justify='center' w='100%' h='94vh' bg='red.400'>
          <Pomodoro />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
