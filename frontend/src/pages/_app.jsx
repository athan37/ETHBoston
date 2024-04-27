import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import WalletProvider from '@/components/providers/wallet'
import '@/styles/globals.css'
import Layout from '@/components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WalletProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletProvider>
    </ChakraProvider>
  )
}
