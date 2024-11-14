/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
'use client';

import { Category } from "./page";

export default function ItemForm(props: { data: Category[]; }) {
    const data = props.data;
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmitItem(e: { preventDefault: () => void; target: any }) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        fetch('http://localhost:3000/api/items', {
            method: 'POST',
            body: JSON.stringify({
                "title": formData.get("title"),
                "caption": formData.get("caption"),
                "imgReference": formData.get("imgReference"),
                "category": formData.get("category"),
            })
          });
    }

    return (
        <section>
            New item :
            <form method="post" onSubmit={handleSubmitItem}>
                <div className="flex justify-between grid grid-cols-2 gap-2">
                    <div>Title</div>
                    <label>
                        
                        <input name="title" type="text"></input>
                    </label>

                    <div>Caption</div>
                    <label>
                        
                        <input name="caption" type="text"></input>
                    </label>
                
                    <div>Image Reference</div>
                    <label>
                        <input name="imgReference" type="text"></input>
                    </label>
                
                    <div>Category</div>
                    <label className="w-full">
                        <select>
                            {data.map((e: Category, i: number) => <option value={i+1} key={i}>{e.label}</option>)}
                        </select>
                    </label>
                </div>
                
                    
                    
                <button type="submit">Add item</button>
            </form>
        </section>
    )
}