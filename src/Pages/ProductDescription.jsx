import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig'; 
import { useParams } from 'react-router-dom';

function ProductDescription() {  
      const [product, setProduct] = useState(null);
      const productId  = useParams();

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

        fetchProduct();
      }, [productId.id]);

      return (
        <div>
          {product ? (
            <div className='my-28'>
              <h2>{product.Name}</h2>
              <p>{product.Price}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
    
    
export default ProductDescription