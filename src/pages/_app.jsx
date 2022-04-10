import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../Components/Header'
import { Theme } from '../styles/theme'
import '../styles/carousel.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
