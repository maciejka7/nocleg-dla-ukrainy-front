import { EditIcon, DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
import ActivateButton from './ActivateButton';
import DeleteButton from './DeleteButton';

type Props = {
  data: Offer[];
};
const YourOffersTableDesktop = (props: Props) => {
  const { data } = props;

  return (
    <Box padding={20} paddingTop={5}>
      <Table mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>Lokalizacja</Th>
            <Th>Tytuł</Th>
            <Th>Dodano</Th>
            <Th isNumeric>Edytuj</Th>
            <Th isNumeric>Aktywuj</Th>
            <Th isNumeric>Usuń</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.voivodeship} - {item.city}</Td>
              <Td>{item.title}</Td>
              <Td>{formatDate(new Date(item.created))}</Td>
              <Td isNumeric>
                <Link passHref href={`/edytuj-ogloszenie/${item.id}`}>
                  <Button size="sm" colorScheme="blue">
                    <EditIcon />
                    <Text ml={4}>Edytuj</Text>
                  </Button>
                </Link>  
              </Td>
              <Td isNumeric>
              {ActivateButton(item, "sm")}
              </Td>
              <Td isNumeric>
                  {DeleteButton(item, 'sm')}
                </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};


export default YourOffersTableDesktop;
