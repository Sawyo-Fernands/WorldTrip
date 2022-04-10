import {  Box, Center, Divider, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import { Banner } from "../Components/Banner";
import { Card } from "../Components/Card";
import { Carousel } from "../Components/carousel";


export default function Home() {
  return (
    <>
    <Banner/>

    <SimpleGrid  py={24}  px={['24','36']} columns={[1,2,2,2,5]} spacing={'1rem'} gap='1rem' as={'section'}>
      
      <Card image='/images/card/Nightlife.png'/>
      <Card image='/images/card/Beach.png'/>
      

      <Card image='/images/card/Modern.png'/>
      <Card image='/images/card/Classic.png'/>
    
      <Card image='/images/card/More.png'/>
      
    </SimpleGrid>
    <Center height='50px' width={'10%'} margin='auto' mb={'2rem'}>
    <Divider orientation='horizontal' borderBottomWidth={'3px'}/>
    </Center>

    <Flex width='100%'  alignItems={'center'} justifyContent='center' mb={6} flexDir='column' as={'section'}>
      <Heading fontWeight={'normal'}  color={'gray.600'} mb={16}>
        <Box textAlign={'center'}>
        Vamos Nessa? <br />
        Então escolha seu continente
        </Box>
        
      </Heading>
    <Carousel/>

    </Flex>
   

    </>
    

  )
}
