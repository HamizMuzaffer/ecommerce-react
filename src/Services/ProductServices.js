import {collection, getDocs, addDoc,setDoc} from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import 'firebase/storage';


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
    // const file = data.ProductIMG[0]; // Get the uploaded file
    // const storageRef = firebase.storage().ref();
    // const fileRef = storageRef.child(file.name);

    // try {
    //   // Upload the file to Firebase Storage
    //   const snapshot = await fileRef.put(file);
    //   const imageUrl = await snapshot.ref.getDownloadURL();
    //    imageUrl = productIMG}
    //   catch (error) {
    //     console.error('Error adding product:', error);
    //   }

    try {

        const docRef = await addDoc(collection(db, "Products"),{
         ...data
        } );
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};



