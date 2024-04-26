import {collection, getDocs, addDoc,setDoc} from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import { storage } from "../Config/firebaseConfig";
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

export const getAllProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Products'));

        const productsData = querySnapshot.docs.map(doc => {
            return {
                id: doc.id, // Add document ID to the product data
                ...doc.data() // Spread the rest of the document data
            };
        });
        console.log(productsData,productsData.id);
        return productsData;

    } catch (error) {
        console.error('Error getting documents: ', error);
    }
};


export const addProduct = async (data) => { 
    const file = data.ProductIMG[0]; // Get the uploaded file
    
    try {
        const storageRef = ref(storage, `productImages/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(snapshot.ref);
        console.log("Image URL:", imageUrl);

        // Add product data to Firestore
        const docRef = await addDoc(collection(db, "Products"), {
            ProductIMG: imageUrl,
            Name: data.Name,
            Price: data.Price,
            Qty: data.Qty,
            Description: data.Description
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};


