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

const ActivateButton = (item: any, size: string) => {
    if(item.active){
  return (         
                    <Button size={size} colorScheme="blue" variant='outline' onClick={() =>{ActivateOffer(item)}}>
                      <ViewOffIcon />
                      <Text ml={4}>Dezaktywuj</Text>
                    </Button>
  );
  }
  return (         
    <Button size={size} colorScheme="blue" variant='outline' onClick={() =>{ActivateOffer(item)}}>
      <ViewIcon />
      <Text ml={4}>Aktywuj</Text>
    </Button>
  );
  };
  
  const ActivateOffer = (item: any) => {
  item.active = !item.active;
  console.log(item.active);
  };

  export default ActivateButton;