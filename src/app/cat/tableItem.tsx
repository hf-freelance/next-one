/* eslint-disable @next/next/no-async-client-component */
'use client';

import { Item } from './page';
import { Key } from 'react';

export default function ItemTable(props : { data: Item[]}) {
    const columns = ['Name', 'Caption', 'Image file', 'Category', 'Price', 'Available'];
    
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    /** const handleSubmitCategory = (e: { preventDefault: () => void; target: any }) => {
    // Empêche le navigateur de recharger la page
        e.preventDefault();

        message = 'Wait';

        // Lit les données du formulaire
        const form = e.target;
        const formData = new FormData(form);
        fetch('http://localhost:3000/api/category', {
            method: 'POST',
            body: JSON.stringify({"label": formData.get("label")})
        }).then(() => router.refresh())
        .catch((err) => console.log(err));
    }
*/
    return (
<table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-left text-sm font-semibold border-b"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item: Item, index: Key) => (
            <tr
              key={index}
              className="even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
            >
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.title}</td>
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.caption}</td>
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.imgReference}</td>
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.category}</td>
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.price}</td>
                <td className="px-4 py-2 text-gray-600 text-sm border-b">{item.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}