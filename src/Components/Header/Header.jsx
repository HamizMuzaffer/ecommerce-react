import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className=" bg-slate-950 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-32">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap text-white">Ecommerce</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to='/AddProduct' type="button" className=" justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</Link>

            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header