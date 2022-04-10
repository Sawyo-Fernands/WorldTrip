import { Box, Flex, Image, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex py={16} bg='gray.900' px={14}  backgroundImage={`url('/images/Background.png')`} as='section' 
    backgroundRepeat={'no-repeat'} backgroundSize='cover' alignItems={'center'} justify='space-around' flexDir={['column','column','row']}>
      <Box width={['90%','600px']}>
        <Text color={'white'} as='h1' fontSize={['2xl','5xl']} mb={[4,6]}>
        5 Continentes, <br />
        infinitas possibilidades.
        </Text>
        <Text color={'white'} fontSize={['1rem',"1.6rem"]} fontWeight={'light'}>
        Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. 
        </Text>
      </Box>
      <Box width={['90%','500px']}>
        <Image src="/images/Airplane.png" alt="Avião" mb={[0,0,'-11rem']} />
      </Box>
    </Flex>

  )
}
