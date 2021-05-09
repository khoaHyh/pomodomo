import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  heading: `IBM Plex Mono, Inter,-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji"`,
  body: `IBM Plex Mono, Inter,-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji"`,
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: props => ({
    body: {
      color: mode('black', 'white')(props),
      bg: mode('white', '#db524d')(props),
    },
  }),
};

const components = {
  //Button: {
  //  // setup light/dark mode component defaults
  //  baseStyle: props => ({
  //    color: mode('white', '#db524d')(props),
  //    bg: mode('#db524d', 'white')(props),
  //  }),
  //},
  Text: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      color: mode('#333', 'white')(props),
    }),
  },
};

const theme = extendTheme({
  ...chakraTheme,
  fonts,
  config,
  styles,
  components,
});

export default theme;
