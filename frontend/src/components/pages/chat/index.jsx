import React, { useState, useEffect } from "react";

import { Box, VStack, Text, Textarea, Button, Spinner, Flex, useToast, Spacer } from '@chakra-ui/react';

import * as client from "./client";
export default function Chat() {
    const [isLoading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState([{content: "wtf", role: "user"}, {content: "asdf", role: "sfd"}, {content: "asdf ", role: "sfd"}

]);
    const [message, setMessage] = useState("");
    const toast = useToast();

    const sendMessage = async () => {
        if (!message.trim()) {
            toast({
                title: "Cannot send an empty message.",
                status: "warning",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        setIsLoading(true);
        const userMessage = {
            role: "user",
            content: message
        };
        try {
            const response = await client.postMessage(userMessage);
            setConversation([...conversation, userMessage, response]);
        } catch (error) {
            toast({
                title: "Error sending message",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
        setMessage("");
        setIsLoading(false);
    };

    const calculateWidth = (text) => {
        const maxChars = 100; // Adjust as necessary for your design
        const minWidth = 20; // Minimum width in percentage
        const maxWidth = 80; // Maximum width in percentage
        const chars = text.length;
        const widthPercentage = Math.min(Math.max(chars / maxChars * 100, minWidth), maxWidth);
        return `${widthPercentage - 11}%`;
    };

    const getConversation = async () => {
        setIsLoading(true);
        try {
            const fetchedConversation = await client.getConversation();
            setConversation(fetchedConversation);
        } catch (error) {
            toast({
                title: "Error fetching conversation",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
        setIsLoading(false);
    };

    useEffect(() => {
        // getConversation();
    }, []);

    return (
        <Flex alignItems='right' width={'50%'} >
            <Spacer />
        <Box p={5} bg="gray.100" w="full" h="85vh" borderRadius="lg" d="flex" flexDirection="column" justifyContent="space-between">
        {isLoading ? (
            <Flex justify="center" align="center" flexGrow={1}>
                <Spinner size="xl" color="blue.500" />
                <Text ml={4}>Please wait :)...</Text>
            </Flex>
        ) : (
            <Flex flexDirection="column" h="full">
                <Flex flexDirection="column" p={4} overflowY="auto" flexGrow={1} bg="white" borderRadius="md" shadow="md">
                    {conversation.map((msg, index) => (
                        <Box 
                            width={calculateWidth(msg.content)}
                            height={50}
                            key={index} 
                            bg={msg.role === "user" ? "blue.200" : "green.200"} 
                            p={3} borderRadius="md" 
                            alignSelf={msg.role === "user" ? "flex-end" : "flex-start"} 
                            mb={2}>
                            {/* <Text fontWeight="bold">{msg.role.toUpperCase()}</Text> */}
                            <Text textAlign={msg.role === "user" ? 'right' : 'left'}>{msg.content}</Text>
                        </Box>
                    ))}
                </Flex>
                <Flex mt={4} alignItems="center">
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        flexGrow={1}
                        mr={2}
                    />
                    <Button colorScheme="blue" onClick={sendMessage}>Send</Button>
                </Flex>
            </Flex>
        )}
        </Box>
    </Flex>
    );
}