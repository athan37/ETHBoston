import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WalletProvider from '@/components/providers/wallet';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { AuthProvider } from "@/contexts/AuthContexts";
import { DBProvider } from '@/contexts/DBContexts';
import Login from './login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './client/firebase';
import LoadingScreen from '@/components/loading';
import { AlchemyProvider } from 'alchemy-sdk';

export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(false);

  if (currentUser === null && !loading) {
    return (
    <ChakraProvider>
      <Login setIsLoggedIn={setCurrentUser} setLoading={setLoading}/>
    </ChakraProvider>)
    ;
  }

  if (loading) return (
    <LoadingScreen />
  )


  return (
    <ChakraProvider>
      <AlchemyProvider>
      <AuthProvider user={currentUser}>
          <WalletProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletProvider>
      </AuthProvider>
      </AlchemyProvider>
    </ChakraProvider>
  );
}
