import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { NavigationContainer } from "./Navigation.styles";
import NavigationMobile from "./NavigationMobile";
import NavigationTablet from "./NavigationTablet";
import NavigationDesktop from "./NavigationDesktop";
import { getBreakpoints } from "../../utils";

type Props = {};

export const Navigation = (props: Props) => {

  const [isTablet] = useMediaQuery(getBreakpoints.query.tablet);
  const [isDekstop] = useMediaQuery(getBreakpoints.query.desktop);

  return (
    <NavigationContainer>
      {(!isTablet && !isDekstop) && <NavigationMobile />}
      {isTablet && !isDekstop && <NavigationTablet />}
      {isDekstop && <NavigationDesktop />}
    </NavigationContainer>
  );
};

export const getStaticProps = async () => {
  return {
    props: {}
  }
}