import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Services/ProductServices'
import Card from '../Components/Card/Card';

function Home() {
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

<div className='m-44'>

<h2 className=''>Home</h2>
{
  products.map((product,idx)=>{
    return <Card  {...product} />
  })
}
</div>

</>  )
}

export default Home