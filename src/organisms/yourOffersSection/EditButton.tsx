import { EditIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const EditButton = (item: any, size: string) => {
  return (
    <Link passHref href={`/edytuj-ogloszenie/${item.id}`}>
    <Button size={size} colorScheme="blue">
      <EditIcon />
      <Text ml={4}>Edytuj</Text>
    </Button>
  </Link>
  );
};

export default EditButton;
