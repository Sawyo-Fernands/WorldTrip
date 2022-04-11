import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { City } from "../Components/City";



export default function Europa(){
    return(

        <Box backgroundClip={'gray.50'}>
            <Flex as={'section'} backgroundImage={`url("/images/Europa.png")`} 
            height={['23vh','25vh','35vh','60vh']} backgroundSize={['100%','100%','cover']} backgroundPosition={['center','left center','left center','center bottom']} justify='center'
            alignItems={['center','center','center','center','end']} px={['0rem','10.5rem']} py={['0rem','7rem']} backgroundRepeat='no-repeat'
            >
            <Heading color={'white'} mr={[null,null,null,null,'auto']} fontWeight='semibold' fontSize={['1.8rem','2.5rem','2.5rem','2.8rem','3.2rem']}>
                Europa
            </Heading>
            </Flex>
            <Flex width={['100%','100%','100%','80%','80%']} px={[10,24,24,24,24]} py={24}  as={'section'}
             margin={'auto'} gap={'4rem'} flexDir={['column','column','column','row','row']} >
                <Box width={['100%','100%','100%','55%','55%']} display='flex' alignItems={'flex-start'} justifyContent='center' >
                    <Text textAlign={'justify'} fontSize='1.1rem' >
                    A Europa é, por convenção, um dos seis  continentes do mundo. Compreendendo a  península ocidental da Eurásia, 
                a Europa geralmente divide-se da 
                Ásia a leste pela  divisória de águas dos montes Urais, o  rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </Box>
                <Box width={['100%','100%','100%','65%','65%']} display='flex' alignItems={'center'} justifyContent='center'>
                    <Image src="/images/Info.png" alt='Informações em relação ao continente '/>
                </Box>
            </Flex>
            <Box width={'80%'} margin={'auto'} px={[10,24,24,24,24]} mb={4}>
                <Heading color={'gray.500'} mb={'1.5rem'}>
                    Cidades +100
                </Heading>
                <SimpleGrid columns={[1,2,2,2,4]} spacing={12}>
                    <City urlImage={"/images/CitysImages/Foto-4.png"} 
                    Title={'Londres'} 
                    subTitle={'Reino Unido'} 
                    Icon={"/images/iconsCitys/Ellipse 6-4.png" }/>
                    <City urlImage={"/images/CitysImages/Foto-3.png"} 
                    Title={'Paris'} 
                    subTitle={'França'} 
                    Icon={"/images/iconsCitys/Ellipse 6-3.png"}/>
                    <City urlImage={"/images/CitysImages/Foto-2.png"} 
                    Title={'Roma'} 
                    subTitle={'Itália'} 
                    Icon={"/images/iconsCitys/Ellipse 6-2.png"}/>

                    <City urlImage={"/images/CitysImages/Foto-1.png"} 
                    Title={'Praga'} 
                    subTitle={'República Tcheca'} 
                    Icon={"/images/iconsCitys/Ellipse 6-1.png"}/>

                    <City urlImage={"/images/CitysImages/Foto.png"} 
                    Title={'Amsterdã'} 
                    subTitle={'Holanda'} 
                    Icon={"/images/iconsCitys/Ellipse 6.png"}/>
                </SimpleGrid>
            </Box>
        </Box>
        
    )
}