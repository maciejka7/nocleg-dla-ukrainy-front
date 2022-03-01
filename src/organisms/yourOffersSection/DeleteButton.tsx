import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Button } from "@chakra-ui/react";
import { deletOffer } from "../../services/offerServices";

const DeleteButton = (item: any, size: string) => {
  return (
    <Button
      size={size}
      colorScheme="blue"
      variant="outline"
      onClick={() => {
        deletOffer(item);
      }}
    >
      <DeleteIcon />
      <Text ml={4}>Usuń</Text>
    </Button>
  );
};

export default DeleteButton;
