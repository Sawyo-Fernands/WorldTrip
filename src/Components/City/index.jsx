import { Box, Flex, Image, Text } from "@chakra-ui/react";



export function City({urlImage,Title,subTitle,Icon}){
    return(
        <Flex flexDir={'column'}   >
            <Image src={urlImage}  height={'10rem'} borderTopRadius={2}/> 

            <Flex border='1px' borderColor={'yellow.400'} borderTop={0} px='6' pt='6' pb={'5'} borderBottomRadius={2} >
                <Box>
                    <Text fontWeight={'bold'} mb={2}>
                        {Title}
                    </Text>
                    <Text fontWeight={'light'} fontSize='0.8rem'>
                        {subTitle}
                    </Text>
                </Box>
                <Box display={'flex'} alignItems='center' justifyContent={'center'} ml='auto'>
                    <Image src={Icon}width={'30px'}  borderRadius='50%'/>
                </Box>
            </Flex>
        </Flex>
    )
}