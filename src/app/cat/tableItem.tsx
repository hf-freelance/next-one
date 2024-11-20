/* eslint-disable @next/next/no-async-client-component */
'use client';

import { useRouter } from 'next/navigation';
import ItemForm from './formItem';
import { Category, Item } from './page';
import { Key } from 'react';
import { addItem } from '@/service/item.service';

export default function ItemTable(props : { data: Item[], categories: Category[]}) {
    const router = useRouter();
    const columns = ['Name', 'Caption', 'Image file', 'Category', 'Price', 'Available'];

    const handleNewItem = (data: string) => {
      addItem(JSON.parse(JSON.stringify(data)))
        .then(() => router.refresh())
        .catch((err) => console.log(err));
    }

    return (
      <section>
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
        <ItemForm data={props.categories} handleNewItem={handleNewItem} />
      </section>
    );
}