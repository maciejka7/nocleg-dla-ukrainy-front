import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { mockedData } from "../../utils/mockedData";

type Props = {};


const LastOfferSection = (props: Props) => {
  return (
    
        <Flex direction="column" w="full" mt={5} p={4}>
      <Heading textAlign="center" size="2xl">Ostatnie ogłoszenia:</Heading>
      <Table  mt={4} variant="simple">
        <Thead>
          <Tr>
            <Th>Lokalizacja</Th>
            <Th>Tytuł</Th>
            <Th isNumeric>Liczba miejsc</Th>
            <Th >Szczegóły</Th>
          </Tr>
        </Thead>
        <Tbody>
            {mockedData.content.map((item) => (
                <Tr key={item.id}>
                    <Td>{item.location}</Td>
                    <Td>{item.title}</Td>
                    <Td isNumeric>{item.freeSpaceFrom}-{item.freeSpaceTo}</Td>
                    <Td> <Link passHref href={`/ogloszenia/${item.id}`}><Search2Icon /></Link> </Td>
                </Tr>))}
        </Tbody >         

      </Table>
      </Flex>
  );
};

export default LastOfferSection;
