import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { App } from "./App";

import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    button: "Poppins",
    heading: "Poppins",
    text: "Poppins",
  },
});

export default function Home({ pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <App {...{ ...pageProps }}></App>
    </ChakraProvider>
  );
}
