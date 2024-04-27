import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const data = [
    // Your data array here
];

async function addBountiesToFirestore(bountyDataArray) {
    const addedDocs = [];
    for (const bountyData of bountyDataArray) {
        try {
            const docRef = await addDoc(collection(db, "bounties"), bountyData);
            console.log("Document written with ID: ", docRef.id);
            addedDocs.push({ id: docRef.id, ...bountyData });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return addedDocs;
}