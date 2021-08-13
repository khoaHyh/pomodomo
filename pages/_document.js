import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/tomato.png" />
          <meta name="og:author" content="@khoaHyh & @wAndrewx" />
          <meta property="og:title" content="Pomodomo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pomodomo.ca" />
          <meta
            property="og:description"
            content="A Pomodoro web app; Slice and dice your work up into intervals"
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
