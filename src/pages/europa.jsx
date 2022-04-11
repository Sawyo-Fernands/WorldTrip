import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";



export default function Europa(){
    return(

        <>
            <Flex as={'section'} backgroundImage={`url("/images/Europa.png")`} 
            height={['18vh','25vh','35vh','60vh']} backgroundSize={['100%','100%','cover']} backgroundPosition={['center','left center','left center','center bottom']} justify='center'
            alignItems={['center','center','center','center','end']} px={['0rem','10.5rem']} py={['0rem','7rem']} backgroundRepeat='no-repeat'
            >
            <Heading color={'white'} mr={[null,null,null,null,'auto']} fontWeight='semibold'>
                Europa
            </Heading>
            </Flex>
            <Flex width={['100%','100%','100%','80%','80%']} px={[10,24,24,24,24]} py={24}  as={'section'}
             margin={'auto'} gap={'4rem'} flexDir={['column','column','column','row','row']} >
                <Box width={['100%','100%','100%','55%','55%']} display='flex' alignItems={'center'} justifyContent='center' >
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
        </>
        
    )
}