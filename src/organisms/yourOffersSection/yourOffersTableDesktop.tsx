import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Offer } from "../../services/addOffer.types";
import { formatDate } from "../../utils";
import ActivateButton from "./ActivateButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const btnSize = "sm";

type Props = {
  data: Offer[];
};

const YourOffersTableDesktop = (props: Props) => {
  const { data } = props;

  return (
    <Box padding={2} paddingTop={5}>
      <Table mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>Lokalizacja</Th>
            <Th>Tytuł</Th>
            <Th>Dodano</Th>
            <Th>Status</Th>
            <Th isNumeric>Edytuj</Th>
            <Th isNumeric>Zmień status</Th>
            <Th isNumeric>Usuń</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>
                {item.voivodeship} - {item.city}
              </Td>
              <Td>{item.title}</Td>
              <Td>{formatDate(new Date(item.created))}</Td>
              <Td>{item.active ? "Aktywne" : "Nieaktywne"}</Td>
              <Td isNumeric>
                {EditButton(item, btnSize)}
              </Td>
              <Td isNumeric>{ActivateButton(item, btnSize)}</Td>
              <Td isNumeric>{DeleteButton(item, btnSize)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default YourOffersTableDesktop;
