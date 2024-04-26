import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const docRef = doc(db, 'Products', productId.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setProduct({ id: docSnap.id, ...docSnap.data() });
            } else {
              console.log('No such document!');
            }
          } catch (error) {
            console.error('Error fetching document: ', error);
          }
        };

        fetchProduct();},[])
  return (
    <><div className='my-44 flex'>
    {
}
    </div>
    </>
  )

}

export default Dashboard