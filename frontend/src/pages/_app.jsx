import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import WalletProvider from '@/components/providers/wallet'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  )
}
