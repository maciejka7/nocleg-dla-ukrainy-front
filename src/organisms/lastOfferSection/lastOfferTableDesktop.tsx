import { Search2Icon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { da, pl } from "date-fns/locale";
import Link from "next/link";
import React from "react";
import { Offer } from "../../services/addOffer.types";
import { formatDate } from "../../utils";

type Props = {
  data: Offer[];
};
const LastOfferTableDesktop = (props: Props) => {
  const { data } = props;

  return (
    <Box padding={20} paddingTop={5}>
      <Table mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>Lokalizacja</Th>
            <Th>Tytuł</Th>
            <Th isNumeric>Liczba miejsc</Th>
            <Th>Dodano</Th>
            <Th isNumeric>Szczegóły</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.voivodeship} - {item.city}</Td>
              <Td>{item.title}</Td>
              <Td isNumeric>
                {item.freeSpaceFrom}-{item.freeSpaceTo}
              </Td>
              <Td>{formatDate(new Date(item.created))}</Td>
              <Td isNumeric>
                <Link passHref href={`/ogloszenia/${item.id}`}>
                  <Button size="sm" colorScheme="blue">
                    <Search2Icon />
                    <Text ml={4}>Szczegóły</Text>
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LastOfferTableDesktop;
