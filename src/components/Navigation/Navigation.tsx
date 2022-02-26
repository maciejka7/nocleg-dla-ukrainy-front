import React from "react";
import { useMediaQuery, theme } from "@chakra-ui/react";
import { NavigationContainer } from "./Navigation.styles";
import NavigationItem from "./NavigationItem";
import { routes } from "./routes";
import { json } from "stream/consumers";
import NavigationMobile from "./NavigationMobile";
import NavigationTablet from "./NavigationTablet";
import NavigationDesktop from "./NavigationDesktop";

type Props = {};

/**
 * 
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
 * 
 */

export const Navigation = (props: Props) => {
  const [isTablet] = useMediaQuery(`(min-width: 768px)`);
  const [isDekstop] = useMediaQuery(`(min-width: 992px)`);

  return (
    <NavigationContainer>
      {(!isTablet && !isDekstop) && <NavigationMobile />}
      {isTablet && !isDekstop && <NavigationTablet />}
      {isDekstop && <NavigationDesktop />}
    </NavigationContainer>
  );
};
