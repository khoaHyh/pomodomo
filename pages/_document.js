import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Pomodomo</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="og:author" content="@khoaHyh & @wAndrewx" />
          <meta property="og:title" content="Pomodomo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pomodomo.ca" />
          <meta
            property="og:description"
            content="A pomodoro web app to split your work up into intervals"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
