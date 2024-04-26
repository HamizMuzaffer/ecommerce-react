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
            <section className="dark:bg-gray-100 dark:text-gray-800 my-44">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={product.ProductIMG} alt="" className="object-contain w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{product.Name}</h3>
                  <span className=" dark:text-gray-600 text-bold text-3xl">Price: &nbsp;{product.Price}</span>
                  <p>{product.Description}</p>
                  <button type="button" className="text-white bg-blue-700 px-36 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>

                </div>
              </a>
             
</div>

          </section>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
    
    
export default ProductDescription