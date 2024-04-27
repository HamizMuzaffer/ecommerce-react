import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import { getAllProducts } from '../Services/ProductServices'

import Table from '../Components/Table/Table';

function Dashboard() {
  
    const [products, setProducts] = useState(null);
    useEffect(()=>{
      (async()=>{
      const productsResponse = await getAllProducts()
      setProducts(productsResponse)
      console.log(products)
     })()
    },[])

    if (!products) return console.log(null) 

  return (
  <>
  <div className='flex justify-center items-center mt-48 w-full'>
<div className=' flex justify-center items-center'>
 <table class=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"/>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
            {
       products.map((product,idx)=>{
     return <Table {...product} />
       })
            }
        </thead>
  <table/>
    
  </div>
  </div>
</>
  
  )

}

export default Dashboard