import { Box, Image } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'



export function Card(props){

    const marginbottom=useBreakpointValue({
        base:'0',
        md:'3rem'
    })

    const image=useBreakpointValue({
        sm:'100%', 
        base:'¨70%',
    })

    return(
        <Box display={'flex'} alignItems='center' justifyContent={'center'} mb={marginbottom}>
        <Image src={props.image} alt={props.content} maxW={image}/>
        
        </Box>

    )
}