// pages/about.js
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW="container.md" py={5}>
      <Heading as="h1" mb={5}>About Us</Heading>
      {/* <Image borderRadius="full" boxSize="150px" src="/path-to-your-image.jpg" alt="Company Image" mb={5} /> */}
      <Text fontSize="lg" lineHeight="tall">
        Welcome to [Your Company Name], where we [briefly describe your mission or unique selling proposition].
        Founded in [Year] by [Founder's Name], we have grown from [origin story or humble beginnings] 
        to [current status, achievements, or future goals].
      </Text>
      <Text mt={4}>
        Our team is dedicated to [describe your team's main focus or values], and we pride ourselves on 
        [highlight unique aspects such as customer service, innovation, or community involvement].
      </Text>
      <Text mt={4}>
        Thank you for visiting our website. We hope to support you with [describe products or services offered] 
        and invite you to join us in [describe a call to action or company vision].
      </Text>
    </Container>
  );
}
