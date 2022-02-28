import { useFormik } from "formik";
import React from "react";
import { AddOfferFormData } from "../../src/services/addOffer.types";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Textarea,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
type Props = {};

const NewOfferPage = (props: Props) => {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const {} = useFormik<AddOfferFormData>({
    initialValues: {
      title: "",
      description: "",
      telephone: "",
      contactName: "",
      freeSpaceFrom: 1,
      freeSpaceTo: 1,
      location: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Dodaj ogłoszenie
          </Heading>

          <FormControl id="title" isRequired>
            <FormLabel>Tytuł</FormLabel>
            <Input
              placeholder="Dodaj tytuł ogłoszenia"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Opis:</FormLabel>
            <Textarea
              placeholder="Treść ogłoszenia"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <FormControl id="telephone" isRequired>
            <FormLabel>Telefon</FormLabel>
            <Input
              placeholder="Telefon kontaktowy"
              _placeholder={{ color: "gray.500" }}
              type="tel"
            />
          </FormControl>

          <FormControl id="location" isRequired>
            <FormLabel>Miejscowość:</FormLabel>
            <Input
              placeholder="Miejscowość"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>

          <FormControl id="contactName" isRequired>
            <FormLabel>Liczba oferowanych miejsc:</FormLabel>
            <Slider
              id="slider"
              defaultValue={5}
              min={0}
              max={20}
              colorScheme="blue"
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                5
              </SliderMark>
              <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
                10
              </SliderMark>
              <SliderMark value={15} mt="1" ml="-2.5" fontSize="sm">
                15
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="blue.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </FormControl>

          <Stack spacing={6} direction={["column", "row"]} mt={6}>
            <Button colorScheme="yellow" variant="outline" w="full">
              Wyczyść
            </Button>
            <Button colorScheme="blue" w="full">
              <Link href="/dodano-ogloszenie"> Dodaj ogłoszenie </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default NewOfferPage;
