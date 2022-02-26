import Link from "next/link";
import React from "react";
import { Flex, Center, Container, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type Props = {};

const page404 = (props: Props) => {
  return (
      <Container centerContent height="90vh"  justifyContent='center' width="100vw">
    <Flex align="center" justify="center">
      <Center>
        <Link href="/" passHref>
          <Flex as='a' align="center" justify="center" direction="column">
            <Text fontSize="2xl" align="center">Upps, sorry, we will try to fix it as soon as possible ⌛</Text>
            <Button colorScheme="blue" variant="link" mt="4"> Go to main page <ArrowForwardIcon />  </Button>
          </Flex>
        </Link>
      </Center>
    </Flex>
    </Container>
  );
};

export default page404;
