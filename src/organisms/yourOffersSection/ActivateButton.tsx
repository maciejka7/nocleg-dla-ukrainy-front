import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
} from "@chakra-ui/react";
import { activateOffer, deactivateOffer } from "../../services/offerServices";

const ActivateButton = (item: any, size: string) => {
  if (item.active) {
    return (
      <Button
        size={size}
        colorScheme="blue"
        variant="outline"
        onClick={() => {
          deactivateOffer(item);
        }}
      >
        <ViewOffIcon />
        <Text ml={4}>Dezaktywuj</Text>
      </Button>
    );
  }
  return (
    <Button
      size={size}
      colorScheme="blue"
      variant="outline"
      onClick={() => {
        activateOffer(item);
      }}
    >
      <ViewIcon />
      <Text ml={4}>Aktywuj</Text>
    </Button>
  );
};

export default ActivateButton;
