import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Footer, TopBar } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TopBar />
      <Component {...pageProps} />{" "}
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
