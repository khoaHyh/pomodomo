import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pomodoro/>
    </ChakraProvider>
  );
}

export default App;
