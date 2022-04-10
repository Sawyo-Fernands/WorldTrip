import {  Flex, SimpleGrid} from "@chakra-ui/react";
import { Banner } from "../Components/Banner";
import { Card } from "../Components/Card";


export default function Home() {
  return (
    <>
    <Banner/>

    <SimpleGrid  py={24}  px={['24','36']} columns={[1,2,2,2,5]} spacing={'1rem'} gap='1rem'>
      
      <Card image='/images/card/Nightlife.png'/>
      <Card image='/images/card/Beach.png'/>
      

      <Card image='/images/card/Modern.png'/>
      <Card image='/images/card/Classic.png'/>
    
      <Card image='/images/card/More.png'/>
      
    </SimpleGrid>
    </>
    

  )
}
