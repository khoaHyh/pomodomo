import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '@fontsource/ibm-plex-mono';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
