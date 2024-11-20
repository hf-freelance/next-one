'use client';

import { useRouter } from 'next/navigation';
import CatForm from './formCategory';
import { Category } from './page';
import { Key } from 'react';
import { addCategory, deleteCategory } from '@/service/category.service';

export default function CatTable(props : { data: Category[] }) {
  const router = useRouter();

  const handleNewCategory = (data: string) => {
    addCategory(JSON.parse(JSON.stringify(data)))
      .then(() => {router.refresh();})
      .catch((err) => {console.log(err);});
  }

  const handleDeleteCategory = (data: string) => {
    deleteCategory(data)
      .then(() => router.refresh())
      .catch((err) => console.log(err));
  }

    return (
      <div className="rounded-lg w-full">
        <table className="w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr>
                <th className="px-4 py-2 max-w-full bg-gray-100 text-gray-700 text-left text-sm font-semibold border-b">Label</th>
                <th className="px-4 py-2 max-w-1 bg-gray-100 text-gray-700 text-center text-sm font-semibold border-b">Update</th>
                <th className="px-4 py-2 max-w-1 bg-gray-100 text-gray-700 text-center text-sm font-semibold border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((category: Category, index: Key) => (
              <tr
                key={index}
                className="even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
              >
                  <td className="px-4 py-2 max-w-full text-gray-600 text-sm border-b">{category.label}</td>
                  <td className="max-w-1 text-sm border-b text-center">X</td>
                  <td className="max-w-1 text-gray-600 text-center text-sm border-b">
                    <button onClick={() => handleDeleteCategory(category.label)} className='bg:red justify-center items-center bg-red-700'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>  
                  </td> 
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="w-full bg-white border border-gray-200 shadow-md p-6">
          <CatForm handleNewCategory={handleNewCategory} />
        </div>
      </div>
    );
}