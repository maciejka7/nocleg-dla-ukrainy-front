import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { HeroSectionContainer } from "./heroSection.styles";

import HeroFlag from "../../../public/assets/images/ua-hero-image.jpg";
import { appCustomTheme } from "../../utils";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <HeroSectionContainer>
        <Container maxW="7xl" mt={5}>
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as="span" color={appCustomTheme.colors.flag.blue.hex}>
                  PO
                </Text>
                <Text as="span" color={appCustomTheme.colors.flag.yellow.hex}>
                  MOC
                </Text>
                <br/>
                <Text as="span" position="relative">
                  UKRAINIE
                </Text>
                <br />
              </Heading>
              <Text color="gray.500">
                Wiarygodne źródło ofert pracy, wsparcia dla osób, które pochodzą z Ukrainy.

              </Text>
              <Stack
                justifyContent="center"
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "row", sm: "row" }}
              >
                <Center p={8}>
                  <Button
                    w="full"
                    maxW="md"
                    colorScheme="facebook"
                    leftIcon={<FaFacebook />}
                  >
                    <Center>
                      <Text>Zaloguj przez Facebook</Text>
                    </Center>
                  </Button>
                </Center>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify="center"
              align="center"
              position="relative"
              w="full"
            >
              <Box
                position="relative"
                height="300px"
                rounded="2xl"
                boxShadow="2xl"
                width="full"
                overflow="hidden"
              >
                <Image alt="Hero Image" src={HeroFlag} layout="fill" />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
