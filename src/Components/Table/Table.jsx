import React, { memo } from 'react'
import { deleteProduct } from '../../Services/ProductServices';

// Handle Delete Function on Click
const handleDelete = (id) => {
    deleteProduct(id);
}

function Table(props) {
    const { Name, id, Qty, Price } = props
    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-12 py-8 mx-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        {Name}
                    </th>
                    <td className="px-6 py-4">
                        {Qty}
                    </td>
                    <td className="px-6 py-4 ">
                        {Price}
                    </td>
                    <td className="px-6 py-4">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mt-2 dark:bg-blue-600 ml-3 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={async () => handleDelete(id)}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </>)
}

export default memo(Table)