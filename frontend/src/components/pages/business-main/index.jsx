import { Flex, Text, List, ListItem } from "@chakra-ui/react";
import Card from "./card";
import { useRouter } from "next/router";
import Link from "next/link";

const data = [
    {
      "event": "Park Cleanup Drive",
      "amount": 50,
      "starRating": 4.5,
      "numReviews": 22,
      "prize": "Free lunch from a local cafe",
      "status": "New"
    },
    {
      "event": "Local Library Organization",
      "amount": 30,
      "starRating": 4.0,
      "numReviews": 18,
      "prize": "Book vouchers",
      "status": "Not new"
    },
    {
      "event": "Senior Tech Help Day",
      "amount": 40,
      "starRating": 4.8,
      "numReviews": 15,
      "prize": "Coffee shop gift card",
      "status": "New"
    },
    {
      "event": "Community Garden Tending",
      "amount": 35,
      "starRating": 4.2,
      "numReviews": 12,
      "prize": "Gardening supplies gift pack",
      "status": "Not new"
    },
    {
      "event": "Neighborhood Beautification",
      "amount": 45,
      "starRating": 4.7,
      "numReviews": 25,
      "prize": "Local store discount coupons",
      "status": "New"
    }
  ]
  
export default function BusinessMain() {
    return (
      <div>
        {/* This is for bounties */}
        <Flex margin={30} align="center" justify="center">
            <Text color='black' fontSize='5xl'> Bounties </Text>
        </Flex>
        <Flex align="center" justify="center">
            {data.map( ({event, amount, starRating, numReviews, prize, status }) => 
            <Link key={prize} href={`bounty/${prize}`} passHref>
               <Card
                    event={event}
                    amount={amount}
                    starRating={starRating}
                    numReviews={numReviews}
                    prize={prize}
                    status={status}
                />
            </Link>
            )}
        </Flex>


        {/* This is for rewards */}
        <Flex margin={20} align="center" justify="center">
            <Text color='black' fontSize='5xl'> Rewards </Text>
        </Flex>
        <Flex align="center" justify="center">
            {data.map( ({event, amount, starRating, numReviews, prize, status }) => 
               <Card
                    event={event}
                    amount={amount}
                    starRating={starRating}
                    numReviews={numReviews}
                    prize={prize}
                    status={status}
                />
            )}
        </Flex>
      </div>
    )
}
