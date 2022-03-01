import { Center, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Offer } from "../../services/addOffer.types";
import { formatDate } from "../../utils";
import { ListItemSpace } from "../../components/ListItem/listItemSpace";
import { ListItem } from "../../components/ListItem/listItem";
import ActivateButton from "./ActivateButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const btnSize = "md";

type Props = {
  data: Offer[];
};

const YourOffersTableMobile = (props: Props) => {
  const { data } = props;

  return (
    <Center py={6}>
      <Flex direction="column" wrap="nowrap" w="full">
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
          >
            <SimpleGrid columns={2} spacing={10} mb={4}>
              <ListItemSpace
                data={{ from: item.voivodeship, to: item.city }}
                label="Lokalizacja"
              />
              <ListItem data={item.title} label="Tytuł" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={10} mb={4}>
              <ListItem
                data={formatDate(new Date(item.created))}
                label="Dodano"
              />
              <ListItem data={item.active ? "Aktywne" : "Nieaktywne"} label="Status" />
            </SimpleGrid>
            <SimpleGrid columns={1} spacing={2} mb={2}>
            {EditButton(item, btnSize)}
              {ActivateButton(item, btnSize)}
              {DeleteButton(item, btnSize)}
            </SimpleGrid>
          </Flex>
        ))}
      </Flex>
    </Center>
  );
};

export default YourOffersTableMobile;
