import { Button, Box, Flex } from "@chakra-ui/react"
import Link from 'next/link'
// import { Button, ButtonGroup } from '@chakra-ui/react'

const data = ['Home', 'About', 'Puchase','Login', 'Logout']

export default function NavBar() {
    return (
        <Flex w={'100%'} align="center" justify="right" marginEnd={20}>
            {data.map(data => 
              <Link href={`/${data.toLocaleLowerCase()}`}>
                  <Button colorScheme='teal' variant='ghost'>
                {data}
                </Button>
              </Link>
            )}
        </Flex>
        )
}