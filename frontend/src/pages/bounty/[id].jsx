import { Box, Container, Heading, Text, Image, Button, Flex, Badge, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Bounty() {
  const router = useRouter();
  const { id } = router.query;

  //Call API here

   // Example reward data
   const reward = {
    imageUrl: "https://via.placeholder.com/500",
    title: "Exclusive Reward Package",
    description: "Experience the ultimate in luxury and convenience with our exclusive reward package. Perfect for those who appreciate the finer things in life.",
    price: "$299"
  };

  return (
    <Flex direction={['column', 'column', 'row']} p={5} maxW="container.xl" mx="auto">
      <Box flex="1">
        <Image src={reward.imageUrl} alt={`Reward ${id}`} borderRadius="md" />
      </Box>
      <VStack flex="1" alignItems="start" px={5} spacing={4}>
        <Heading as="h1">{reward.title}</Heading>
        <Text fontSize="lg">{reward.description}</Text>
        <Badge colorScheme="green">New</Badge>
        <Text fontSize="2xl" fontWeight="bold">{reward.price}</Text>
        <Button colorScheme="blue" size="lg" onClick={() => alert('Added to cart!')}>
          Register for bounty
        </Button>
      </VStack>
    </Flex>
  );
}
