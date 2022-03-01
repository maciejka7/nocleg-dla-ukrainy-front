
import {
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { getBreakpoints } from "../../utils";
import { mockedData } from "../../utils/mockedData";
import YourOffersTableDesktop from "./yourOffersTableDesktop";
import YourOffersTableTablet from "./yourOffersTableTablet";
import YourOffersTableMobile from "./yourOffersTableMobile";

type Props = {};

export const YourOffersSection = (props: Props) => {
  const [isTablet] = useMediaQuery(getBreakpoints.query.tablet);
  const [isDesktop] = useMediaQuery(getBreakpoints.query.desktop);

  return (
    <Flex direction="column" w="full" mt={5} p={4}>
      <Heading textAlign="center" size="2xl">
        Twoje ogłoszenia:
      </Heading>
      <Text textAlign="center" size="xl" color={"gray.600"} mt={4}>
        Zarządzaj swoimi ogłoszeniami
      </Text>
      {!isTablet && !isDesktop && <YourOffersTableMobile  data={mockedData.content} />}
      {isTablet && !isDesktop && <YourOffersTableTablet  data={mockedData.content} />}
{isDesktop && <YourOffersTableDesktop data={mockedData.content} />}

    </Flex>
  );
};
