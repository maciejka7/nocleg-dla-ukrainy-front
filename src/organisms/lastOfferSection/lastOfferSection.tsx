
import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { CategoriesResponseType, getCategories } from "../../services/categoriesService";
import { listOffers } from "../../services/offerServices";
import { getBreakpoints } from "../../utils";
import { mockedData } from "../../utils/mockedData";
import LastOfferTableDesktop from "./lastOfferTableDesktop";
import LastOfferTableMobile from "./lastOfferTableMobile";
import LastOfferTableTablet from "./lastOfferTableTablet";

type Props = {};

export const LastOfferSection = (props: Props) => {

  const [categories, setCategories ] = useState<CategoriesResponseType[]>()
  const [currentCategory, setCurrentCategory ] = useState<CategoriesResponseType>()
  
  React.useEffect(() => {
    
    if(currentCategory && 'id' in currentCategory)  {

      listOffers({categoryId: currentCategory.id})
        .then(response => { console.log('offers', response) })
    }
    }, [currentCategory])


  React.useEffect(() => {
    getCategories()
      .then(response => { 
        if(response.status === 200 && response.data && 'data' in response) {
          setCategories(response.data)
          setCurrentCategory(response.data[0]);   
        }
      })
      .catch(error => { console.log(error) })
  }, [])



  const [isTablet] = useMediaQuery(getBreakpoints.query.tablet);
  const [isDekstop] = useMediaQuery(getBreakpoints.query.desktop);

  return (
    <Flex direction="column" w="full" mt={5} p={4}>
      <Heading textAlign="center" size="2xl">
        Ostatnie ogłoszenia:
      </Heading>
      <Text textAlign="center" size="xl" color={"gray.600"} mt={4}>
        Przeglądaj najnowesze ogłoszenia dodane przez naszych użytkowników
      </Text>
      
      <Tabs isFitted variant='enclosed' mt={4}>
        <TabList mb='1em'>
          {categories && categories.map(category => (
          <Tab 
            onClick={()=> setCurrentCategory(category)}
            key={category.id}>
              {category.title} - {category.description } 
          </Tab>))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {!isTablet && !isDekstop && <LastOfferTableMobile data={mockedData.content}/>}
      {isTablet && !isDekstop && <LastOfferTableTablet data={mockedData.content}/>}
      {isDekstop && <LastOfferTableDesktop data={mockedData.content} />}
    </Flex>
  );
};
