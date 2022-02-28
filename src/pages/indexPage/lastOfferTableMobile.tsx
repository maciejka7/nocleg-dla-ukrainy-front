import { Center, Flex, SimpleGrid, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Offer } from "../../services/addOffer.types";
import { formatDate } from "../../utils";
import { ListItemSpace } from "./listItemSpace";
import { ListItem } from "./listItem";
import Link from "next/link";
import { Search2Icon } from "@chakra-ui/icons";

type Props = {
  data: Offer[];
};

const LastOfferTableMobile = (props: Props) => {
  const { data } = props;

  return (
    <Center py={6}>
      <Flex direction="column" wrap="nowrap" w="full">
        {data.map((item) => (
          <Flex
            key={item.id}
            boxShadow="md"
            rounded="lg"
            direction="column"
            p={4}
            textAlign="center"
            mb={4}
          >
            <SimpleGrid columns={2} spacing={10} mb={4}>
              <ListItem data={item.location} label="Lokalizacja" />
              <ListItem data={item.title} label="Tytuł" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={10} mb={4}>
              <ListItemSpace
                data={{ from: item.freeSpaceFrom, to: item.freeSpaceTo }}
                label="Liczba miejsc"
              />
              <ListItem
                data={formatDate(new Date(item.created))}
                label="Dodano"
              />
            </SimpleGrid>
            <Link passHref href={`/ogloszenia/${item.id}`}>
              <Button colorScheme="blue">
                <Search2Icon />
                <Text ml={4}>Szczegóły</Text>
              </Button>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Center>
  );
};

export default LastOfferTableMobile;
