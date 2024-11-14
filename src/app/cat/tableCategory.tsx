/* eslint-disable @next/next/no-async-client-component */
'use client';

import { Category } from './page';
import { Key } from 'react';

export default function CatTable(props : { data: Category[] }) {

    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
              <th className="px-4 py-2 max-w-full bg-gray-100 text-gray-700 text-left text-sm font-semibold border-b"
              >Label</th>
              <th className="px-4 py-2 max-w-1 bg-gray-100 text-gray-700 text-center text-sm font-semibold border-b"
              >Update</th> <th className="px-4 py-2 max-w-1 bg-gray-100 text-gray-700 text-center text-sm font-semibold border-b"
              >Delete</th>
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
                <td className="max-w-1 text-gray-600 text-center text-sm border-b">X</td> 
            </tr>
          ))}
        </tbody>
      </table>
    );
}