import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Offer } from "../../src/services/addOffer.types";
import { getOfferById } from "../../src/utils/mockedData";
import Link from "next/link";
import { PhoneIcon } from "@chakra-ui/icons";

type Props = {};

const OfferDetails = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const [currentOffer, setCurrentOffer] = useState<any>();

  React.useEffect(() => {
    if (id && typeof id === "string") {
      const result = getOfferById(id);
      if (result && result !== undefined) {
        setCurrentOffer(result);
      } else {
        router.push("/");
      }
    }
  }, [id, router, currentOffer]);

  console.log(currentOffer);

  return (
    <div>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack w="full">
            <Flex align="center" justify="space-between" w="full">
              <Avatar size="xs" src="https://bit.ly/broken-link" marginRight="10px"/>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
                marginRight="auto"
              >
                {currentOffer?.contactName}
              </Text>
              
              <Link passHref href={`tel:${currentOffer?.telephone}`}>
                  <Button colorScheme="green" variant="outline" size="sm">
                    <PhoneIcon marginRight="10px" /> {currentOffer?.telephone}
                  </Button>
                </Link>
            </Flex>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {currentOffer?.title}
            </Heading>
            <Text color={"gray.500"}>{currentOffer?.description}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"lg"}>
              <Text fontWeight={600}>Liczba oferowanych miejsc:</Text>
              <Text color={"gray.500"}>
                {currentOffer?.freeSpaceFrom} - {currentOffer?.freeSpaceTo}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      ))
    </div>
  );
};

export default OfferDetails;
