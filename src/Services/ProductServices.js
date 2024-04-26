import {collection, getDocs, addDoc,setDoc} from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import { productEntity } from "../lib/ProductEntity";

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
        
export const addProducts = async () =>{
    try {

        const docRef = await addDoc(collection(db, "Products"), {
            name: "Tokyo",
            country: "Japan"
          });
    } catch (error) {
        
    }
}



