import React, { BaseSyntheticEvent } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { addOfferSchema } from "../../src/organisms/addOfferForm/addOffer.schema";
import { voivodeshipsList } from "../../src/models/voivodeships";
import { mockedCategoriesData } from "../../src/models/categories";
import { createOffer } from "../../src/services/offerServices";
import { useRouter } from "next/router";

type Props = {};

const NewOfferPage = (props: Props) => {
  const sliderDefaultValue = [1, 5];
  const [sliderValue, setSliderValue] = React.useState(sliderDefaultValue);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    // getCategories();
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addOfferSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    const dataToSend = {
      ...data,
      contactName: "na razie na sztywno ;>",
      freeSpaceFrom: sliderValue[0],
      freeSpaceTo: sliderValue[1],
    };
    delete dataToSend.confirmTelephone;
    createOffer(dataToSend);
    setTimeout(() => { setIsLoading(false); router.push("/dodano-ogloszenie")}, 2000);
  };

  const handleSelectChange = (e: BaseSyntheticEvent, name: string) => {
    setValue(name, e.target.value, { shouldValidate: true });
  };

  return (
    <Flex
      direction="column"
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
      p={5}
    >
      <Box justifySelf="flex-end">
        <Text fontSize="3xl" fontWeight="bold"> Wypełnij formularz: </Text>
        <Text fontSize="lg" color="gray.600"> Wypełniajac formularz pomagasz innym </Text>
        <Text fontSize="lg" color="gray.600"> Pamiętaj aby podawać tylko prawdziwe informacje </Text>

      </Box>
      <Box
        maxW={["95vw", '70vw']}
        w={"full"}
        mt={8}
        mb={20}
        pt={[5, 2]}
        pb={[5, 2]}
        boxShadow={"2xl"}
        rounded={"md"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            direction={["column", "row"]}
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.categoryId} isRequired>
                <FormLabel htmlFor="categoryId">Kategoria</FormLabel>
                <Select
                  placeholder="Wybierz kategorię"
                  {...register("categoryId", {
                    onBlur: (e) => handleSelectChange(e, "categoryId"),
                  })}
                >
                  {mockedCategoriesData.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title} - {category.description}
                    </option>
                  ))}
                </Select>
                {errors.categoryId?.message && (
                  <FormErrorMessage>
                    {errors.categoryId?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>

            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.title} isRequired>
                <FormLabel htmlFor="Title">Title</FormLabel>
                <Input
                  placeholder="Tytuł ogłoszenia"
                  id="Title"
                  type="text"
                  {...register("title")}
                />
                {errors.title?.message && (
                  <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>

          <Flex
            direction={["column", "row"]}
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.voivodeship} isRequired>
                <FormLabel htmlFor="city">Województwo</FormLabel>

                <Select
                  placeholder="Wybierz województwo"
                  {...register("voivodeship", {
                    onBlur: (e) => handleSelectChange(e, "voivodeship"),
                  })}
                >
                  {voivodeshipsList.map((voivodeship) => (
                    <option key={voivodeship.id} value={voivodeship.id}>
                      {voivodeship.value}
                    </option>
                  ))}
                </Select>
                {errors.voivodeship?.message && (
                  <FormErrorMessage>
                    {errors.voivodeship?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>

            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.city} isRequired>
                <FormLabel htmlFor="city">Miasto:</FormLabel>
                <Input
                  placeholder="Miasto"
                  id="city"
                  type="text"
                  {...register("city")}
                />
                {errors.city?.message && (
                  <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>

          <Flex
            direction={["column", "row"]}
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.description} isRequired>
                <FormLabel htmlFor="city">Opis</FormLabel>

                <Textarea
                  rows={5}
                  placeholder="Opis"
                  id="description"
                  {...register("description")}
                />
                {errors.description?.message && (
                  <FormErrorMessage>
                    {errors.description?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>

            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.telephone} isRequired>
                <FormLabel htmlFor="telephone">Telefon:</FormLabel>
                <Input
                  placeholder="Telefon"
                  id="telephone"
                  type="tel"
                  {...register("telephone")}
                />
                {errors.telephone?.message && (
                  <FormErrorMessage>
                    {errors.telephone?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.confirmTelephone}
                isRequired
                mt={4}
              >
                <FormLabel htmlFor="confirmTelephone">
                  Potwierdz numer telefonu:
                </FormLabel>
                <Input
                  placeholder="Telefon"
                  id="confirmTelephone"
                  type="tel"
                  {...register("confirmTelephone")}
                />
                {errors.confirmTelephone?.message && (
                  <FormErrorMessage>
                    {errors.confirmTelephone?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>

          <Flex
            direction={["column", "row"]}
            alignContent="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]}>
              <FormControl isInvalid={errors.description} isRequired>
                <FormLabel htmlFor="city">Ilość wolnych miejsc</FormLabel>
                <RangeSlider
                  defaultValue={sliderDefaultValue}
                  min={1}
                  max={20}
                  onChange={(v) => {
                    setSliderValue(v);
                  }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <RangeSliderTrack bg="blue.100">
                    <RangeSliderFilledTrack bg="blue.700" />
                  </RangeSliderTrack>
                  <RangeSliderThumb boxSize={8} index={0}>
                    {" "}
                    {sliderValue[0]}{" "}
                  </RangeSliderThumb>
                  <RangeSliderThumb boxSize={8} index={1}>
                    {" "}
                    {sliderValue[1]}{" "}
                  </RangeSliderThumb>
                </RangeSlider>
              </FormControl>
            </Box>

            <Flex w={['100%' , '50%']} pt={[2,5]} pb={[2,5]} pr={[5,5]} pl={[5,5]} justifyContent="space-between">
              <Button type="reset" colorScheme="yellow" variant="outline">
                Wyczyść
              </Button>
              <Button
                type="submit"
                disabled={Object.keys(errors).length ? true : false}
                colorScheme="blue"
                isLoading={isLoading ? true : false}
                isDisabled={isLoading ? true : false}
                loadingText='Dodawanie...'
              >
                Dodaj
              </Button>
            </Flex>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default NewOfferPage;
