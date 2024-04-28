  import {
    Box,
    Heading,
    List,
    ListItem,
    Text,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import { Button } from "@chakra-ui/button";
  import { onAuthStateChanged } from "firebase/auth";
  import React, { useEffect, useState } from "react";
  import { db } from "../client/firebase";
  import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
  import { getAuth } from "firebase/auth";

  export default function ManageVolunteers() {
    const [bounties, setBounties] = useState([]);
    const [participantsDetails, setParticipantsDetails] = useState([]);

    // const [participants, setParticipants] = useState([]);
    // const [usersData, setUsersData] = useState([]);

    // const [companyName, setCompanyName] = useState("");
    const toast = useToast();

    const auth = getAuth();
    const user = auth.currentUser;


    useEffect(() => {
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "You must be logged in to manage volunteers.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    
      async function fetchData() {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          console.log("No such document for the user!");
          return;
        }
        const userCompany = userSnap.data().company;
    
        const bountiesSnapshot = await getDocs(query(collection(db, "bounties"), where("company", "==", userCompany)));
    let newBounties = bountiesSnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    }));

    let participantPromises = newBounties.flatMap(bounty =>
      (bounty.participants || []).map(async (participantId) => {
        if (!participantId || typeof participantId !== 'string') {
          console.log("Invalid participant ID:", participantId); // Debug output
          return null;
        }

        const participantRef = doc(db, "users", participantId);
        const participantSnap = await getDoc(participantRef);
        if (participantSnap.exists()) {
          return {
            id: participantId,
            name: participantSnap.data().name,
            email: participantSnap.data().email,
            bounty: bounty.event,
            status: participantSnap.data().request && participantSnap.data().request.includes(bounty.id) ? "Verify" : "Pending"
          };
        }
        return null;  // Return null for non-existing participant snapshots to filter out later
      })
    );

    const participantsDetails = (await Promise.all(participantPromises)).filter(p => p !== null);
    
    setBounties(newBounties);
    setParticipantsDetails(participantsDetails);
  }

  fetchData();
}, [user, toast]);


return (
  <VStack  spacing={8} m={5}>
    <Heading as="h1" size="xl" my={5} textAlign="center" color="teal.600">
      Manage Volunteers
    </Heading>
    {participantsDetails.map((participant) => (
      <Box
      width="1000px"
      height="160px"
        key={participant.id}
        p={5}
        shadow="xl"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        bgGradient="linear(to-r, teal.100, orange.100)"
      >
        <VStack align="stretch" >
          <Text fontSize="lg" fontWeight="bold" mb={2} color="teal.800">
            {participant.name} ({participant.email})
          </Text>
          <Text fontSize="md" color="gray.600">
            {participant.bounty}
          </Text>
          <Button
            mt={3}
            colorScheme={participant.status === "Verify" ? "green" : "yellow"}
            variant="solid"
            size="sm"
          >
            {participant.status}
          </Button>
        </VStack>
      </Box>
    ))}
  </VStack>
);

  }



    //   return (
    //     <VStack>
    //       <Heading as="h1" size="xl" my={5}>
    //         Manage Volunteers
    //       </Heading>
    //       {bounties.map((bounty) => (
    //         <Box key={bounty.id} p={5} shadow="md" borderWidth="1px">
    //           <Heading as="h2" size="md">{bounty.event}</Heading>
    //           <List spacing={3}>
    //             {bounty.participants && bounty.participants.map((participant) => (
    //               <ListItem key={participant}>
    //                 <Text as="span" fontWeight="bold">Participant ID:</Text> {participant}
    //               </ListItem>
    //             ))}
    //           </List>
    //         </Box>
    //       ))}
    //     </VStack>
    //   );
    // }

    