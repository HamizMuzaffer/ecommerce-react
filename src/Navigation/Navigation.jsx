import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../Pages/Home'
import AddProduct from '../Pages/AddProduct'
import ProductDescription from '../Pages/ProductDescription'
import Dashboard from '../Pages/Dashboard'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='/AddProduct' element={<AddProduct />} />
      <Route path='/description/:id' element={<ProductDescription />} />
      <Route path='/dashboard' element={<Dashboard />} />
      
    </Route>
    )
)

function Navigation() {
  return (
<>
<RouterProvider router={router}/>
</>
)
}

export default Navigation