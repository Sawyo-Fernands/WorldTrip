import { Box, Image } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'



export function Card(props){

    const marginbottom=useBreakpointValue({
        base:'0',
        md:'3rem'
    })

   

    return(
        <Box display={'flex'} alignItems='center' justifyContent={'center'} mb={marginbottom} >
        <Image src={props.image} alt={props.content} maxW={['90px','180px',,'200px','200px','200px']} maxH={['90px','180px',,'200px','200px','200px']} />
        
        </Box>

    )
}