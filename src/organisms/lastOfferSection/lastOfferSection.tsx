
import {
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { getBreakpoints } from "../../utils";
import { mockedData } from "../../utils/mockedData";
import LastOfferTableDesktop from "./lastOfferTableDesktop";
import LastOfferTableMobile from "./lastOfferTableMobile";
import LastOfferTableTablet from "./lastOfferTableTablet";

type Props = {};

export const LastOfferSection = (props: Props) => {
  const [isTablet] = useMediaQuery(getBreakpoints.query.tablet);
  const [isDekstop] = useMediaQuery(getBreakpoints.query.desktop);

  return (
    <Flex direction="column" w="full" mt={5} p={4}>
      <Heading textAlign="center" size="2xl">
        Ostatnie ogłoszenia:
      </Heading>
      <Text textAlign="center" size="xl" color={"gray.600"} mt={4}>
        Przeglądaj najnowesze ogłoszenia dodane przez naszych użytkowników
      </Text>

      {!isTablet && !isDekstop && <LastOfferTableMobile data={mockedData.content}/>}
      {isTablet && !isDekstop && <LastOfferTableTablet data={mockedData.content}/>}
      {isDekstop && <LastOfferTableDesktop data={mockedData.content} />}
    </Flex>
  );
};
