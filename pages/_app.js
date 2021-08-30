import { Global, css } from "@emotion/react";
import "reset-css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";

const style = css`
  html {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 10px;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
