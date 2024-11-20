/* eslint-disable @next/next/no-async-client-component */
'use client';

import { useRouter } from 'next/navigation';
import ItemForm from './formItem';
import { Category, Item } from './page';
import { Key } from 'react';
import { addItem, deleteItem } from '@/service/item.service';

export default function ItemTable(props : { data: Item[], categories: Category[]}) {
    const router = useRouter();
    const columns = ['Name', 'Caption', 'Image file', 'Category', 'Price', 'Available'];

    const handleNewItem = (data: string) => {
      addItem(JSON.parse(JSON.stringify(data)))
        .then(() => router.refresh())
        .catch((err) => console.log(err));
    }

    const handleDeleteItem = (data: number) => {
      deleteItem(data)
        .then(() => router.refresh())
        .catch((err) => console.log(err));
    }

    return (
      <div className='w-full'>
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
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
                  <td className='px-4 py-2 text-gray-600 text-sm border-b'>
                    <button onClick={() => handleDeleteItem(item.idItem)} className='bg:red justify-center items-center bg-red-700'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full bg-white border border-gray-200 shadow-md p-6">
          <ItemForm data={props.categories} handleNewItem={handleNewItem} />
        </div>
      </div>
    );
}