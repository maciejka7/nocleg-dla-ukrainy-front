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

const DeleteButton = (item: any, size: string) => {
  return (         
    <Button size={size} colorScheme="blue"  variant='outline' onClick={() =>{DeleteOffer(item)}}>
                    <DeleteIcon />
                    <Text ml={4}>Usuń</Text>
                  </Button>
  );
  };
  
  const DeleteOffer = (item: any) => {
  console.log("delete");
  };
  
  export default DeleteButton;