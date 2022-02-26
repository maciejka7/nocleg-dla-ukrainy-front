import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TopBar } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TopBar />
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
