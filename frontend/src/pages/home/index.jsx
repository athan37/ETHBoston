import { useWallet } from "@/hooks/useWallet";
import BusinessMain from "../../components/pages/business-main";
import UserMain from "../../components/pages/user-main";
import {useState} from 'react';
import { Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import NavBar from "../../components/pages/nav-bar";
import Header from "../../components/pages/header";

//ignore
import InfoSection from "./info-section";
import WallSection from "./wall-section";
import WalletSection from "./wallet-section";
import styles from "./styles.module.css";
import { useDB } from "@/contexts/DBContexts";
import Chat from "@/components/pages/chat";

export default function Home() {
    const db = useDB();
    const { walletConnectionStatus } = useWallet();

    const [isBusiness, setIsBusiness] = useState(true)


    console.log(db)
    return (
        <>
        {isBusiness ? <BusinessMain /> : <UserMain />}
        </>
    )
}


    // className={styles.home}
        // <div >
            /* <section className={styles.col1}>
                <WalletSection />
            </section>

            <section className={styles.col2}>
                {walletConnectionStatus === "connected"
                    ? <WallSection />
                    : <BusinessMain />
                }
            </section> */
        // </div>