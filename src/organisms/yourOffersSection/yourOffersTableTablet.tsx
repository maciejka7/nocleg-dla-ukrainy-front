import { EditIcon } from "@chakra-ui/icons";
import { Center, Flex, SimpleGrid, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Offer } from "../../services/addOffer.types";
import { formatDate } from "../../utils";
import { ListItemSpace } from "../../components/ListItem/listItemSpace";
import { ListItem } from "../../components/ListItem/listItem";
import ActivateButton from "./ActivateButton";
import DeleteButton from "./DeleteButton";

type Props = {
  data: Offer[];
};
const YourOffersTableTablet = (props: Props) => {
  const { data } = props;

  return (
    <Center py={6}>
      <Flex direction="row" wrap="wrap" justifyContent="space-around" w="full">
        {data.map((item) => (
          <Flex
            key={item.id}
            boxShadow="md"
            rounded="lg"
            p={4}
            textAlign="center"
            direction="column"
            mb={4}
            w="full"
            maxWidth="45vw"
          >
            <SimpleGrid columns={2} spacing={10} mb={4}>
              <ListItemSpace
                data={{ from: item.voivodeship, to: item.city }}
                label="Lokalizacja"
              />
              <ListItem data={item.title} label="Tytuł" />
            </SimpleGrid>
            <SimpleGrid columns={1} spacing={10} mb={4}>
              <ListItem
                data={formatDate(new Date(item.created))}
                label="Dodano"
              />
            </SimpleGrid>
            <SimpleGrid columns={1} spacing={2} mb={2}>
              <Link passHref href={`/edytuj-ogloszenie/${item.id}`}>
                <Button size="md" colorScheme="blue">
                  <EditIcon />
                  <Text ml={4}>Edytuj</Text>
                </Button>
              </Link>
              {ActivateButton(item, "md")}
              {DeleteButton(item, "md")}
            </SimpleGrid>
          </Flex>
        ))}
      </Flex>
    </Center>
  );
};

export default YourOffersTableTablet;
