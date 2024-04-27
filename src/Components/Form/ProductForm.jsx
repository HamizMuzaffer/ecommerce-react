import React from 'react'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../Services/ProductServices';

export default function ProductForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
      try {
        await addProduct(data)
         console.log(data)
         reset()
          alert('Product added successfully')
          window.location.href = "http://localhost:5173/";
        } catch (error) {
        console.error(error)
      }
      
    }
    
  return (
<>
        <section className="my-20 max-w-4xl p-6 mx-auto bg-black rounded-lg shadow-md dark:bg-gray-800 ">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white text-center">Add Products</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">Product Name</label>
              <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("Name", { required: true })}/>
              {errors.Name && <span>required</span>}
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Price</label>
              <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("Price", { required: true })}/>
              {errors.Price && <span>required</span>}
            </div>
            <div>
              <label className="text-white dark:text-gray-200" >Qty</label>
              <input type="number" className="block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("Qty", { required: true })}/>
              {errors.Qty && <span>required</span>}
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Description</label>
              <textarea  type="textarea" className="block w-full h-44 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"{...register("Description", { required: true })}></textarea>
              {errors.Description && <span>required</span>}
            </div>
            <div className="">
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center items-center px-6 py-20 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input
    id="file-upload"
    name="file-upload"
    type='file'
    className="sr-only"
    accept="image/*"
   
    {...register("ProductIMG", { required: true })}
/>

                      {errors.ProductIMG && <span>required</span>}

                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p> </div>
              </div>
            </div>
          </div>
                

          <div className="flex justify-end mt-6">
            <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-950 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Post</button>
          </div>
        </form>
      </section>



</>  )
}

