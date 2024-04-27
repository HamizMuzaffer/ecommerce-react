import {collection, getDocs, addDoc,doc,deleteDoc} from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import { storage } from "../Config/firebaseConfig";
import {ref,uploadBytes,getDownloadURL,} from 'firebase/storage';

// Get Product From Firebase
export const getAllProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Products'));

        const productsData = querySnapshot.docs.map(doc => {
            return {
                id: doc.id, 
                ...doc.data() 
            };
        });
        return productsData;

    } catch (error) {
        console.error('Error getting documents: ', error);
    }
};

// Add Product Function
export const addProduct = async (data) => { 
    const file = data.ProductIMG[0]; 
    
    try {
        const storageRef = ref(storage, `productImages/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(snapshot.ref);
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

// Delete Product Function 
export const deleteProduct = async (id) => {
    const docRef = doc(db, "Products", id);
    await deleteDoc(docRef)
     .then(() => {

        console.log("Document successfully deleted!");
        window.location.reload();
      })
     .catch((error) => {
        console.error("Error removing document: ", error);
      });
    }