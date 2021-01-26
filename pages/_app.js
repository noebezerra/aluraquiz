import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText}
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  :root {
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
  h1,
  h2,
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.125;
    font-weight: lighter;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
