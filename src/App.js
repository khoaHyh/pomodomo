import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
  ColorModeProvider,
  Text,

} from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import Pomodoro from "./components/Pomodoro";

const textBreakPoints = createBreakpoints();


function App() {
  return (
    <ChakraProvider theme={theme} >
      <Flex direction='column' align='center' justify='center' w='100%' h='98vh' bg='red.300'>
        <Pomodoro />
        {/* <Text>
            Test
          </Text> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
