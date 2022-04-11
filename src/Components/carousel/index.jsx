
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import "swiper/css";
import "swiper/css/navigation";


import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";



export function Carousel(){

    return(
            <Box width={'80%'} margin='auto' height='500px' display={'flex'} alignItems={'center'} justifyContent='center'>
    <Swiper 
    cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide 
        style={{backgroundImage:`url('/images/continentes/Europa.png')`,backgroundPosition:'center',backgroundSize:'cover'}}>
        <ChakraLink _hover={{textDecoration:'none'}}>
            <Link href={'/europa'}>
            <Flex flexDir={'column'}>
                <Heading mb={6}>
                    Europa 
                </Heading>
                <Text fontSize={'1.1rem'}>
                        O continente mais antigo
                </Text>
            </Flex>
            </Link>
        </ChakraLink>

        </SwiperSlide>
        <SwiperSlide 
        style={{backgroundImage:`url('/images/continentes/asia.jpg')`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <ChakraLink _hover={{textDecoration:'none'}}>
            <Link href={'/asia'}>
            <Flex flexDir={'column'}>
                <Heading mb={6} fontFamily='Poppins'>
                Ásia 
                </Heading>
                <Text fontSize={'1.1rem'}>
                    O maior continente do planeta terra
                </Text>
            </Flex>
            </Link>
        </ChakraLink> 
            </SwiperSlide>
        
      </Swiper>
        </Box>
        
         

       
    )

}