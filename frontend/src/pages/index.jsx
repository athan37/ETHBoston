import { Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import Header from "@/components/pages/header";
import NavBar from "@/components/pages/nav-bar";
import { useRouter } from "next/router";
import DynamicContent from "@/components/DynamicContent";
import Layout from "@/components/Layout";


export default function HomePage() {
  const router = useRouter();
  const { content } = router.query;

  // if (router.isFallback || !content) {
  //   return <div>Loading...</div>; // or any other loading state representation
  // }

  return (
    <Grid
      templateAreas={`"header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows="50px 1fr 30px"
      gridTemplateColumns={'repeat(2, 1fr)'}
      h='100vh'
      gap='4'
      color='blackAlpha.700'
      fontWeight='bold'
  >
    <GridItem rowSpan={3} colSpan={4} pl='2' bg='white.300' area={'nav'}>
        <Flex marginTop={5}>
            <Header />
            <Spacer />
            <NavBar />
        </Flex>
    </GridItem>
    <GridItem rowSpan={2} colSpan={4} margin={20} pl='2' bg='white.300' area={'main'}>
      {/* <Home /> */}
      <DynamicContent content={content}/>
    </GridItem>


    <GridItem rowSpan={2} colSpan={4} pl='2' bg='blue.300' area={'footer'}>
        Footer
    </GridItem>
  </Grid>
  )
}
