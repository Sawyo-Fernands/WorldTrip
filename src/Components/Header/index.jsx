import { Flex, Image } from "@chakra-ui/react";



export function Header(){
    return(
        <Flex width={'100%'} height="24"  alignItems='center' justify={'center'} as={'header'}> 
            <Image src="images/logo.png" alt="worldtrip"/>  
        </Flex>
    )
}