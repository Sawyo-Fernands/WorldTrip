
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";



export function Carousel(){

    return(
        <Box width={'80%'} margin='auto' height='500px' display={'flex'} alignItems={'center'} justifyContent='center'>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide 
        style={{backgroundImage:`url('/images/continentes/Europa.png')`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <Flex flexDir={'column'}>
                <Heading mb={6}>
                    Europa 
                </Heading>
                <Text fontSize={'1.1rem'}>
                        O continente mais antigo
                </Text>
            </Flex>
        </SwiperSlide>
        <SwiperSlide 
        style={{backgroundImage:`url('/images/continentes/asia.jpg')`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <Flex flexDir={'column'}>
                <Heading mb={6}>
                    Ásia 
                </Heading>
                <Text fontSize={'1.1rem'}>
                        O maior continente do planeta terra
                </Text>
            </Flex>
            
            
            </SwiperSlide>
        
      </Swiper>
        </Box>
         

       
    )

}