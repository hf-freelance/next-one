/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Category } from "./page";


export default function ItemForm(props: { data: Category[]; handleNewItem: (data: string) => void }) {
    const data = props.data;
    let message, error;

    function handleSubmitItem(e: { preventDefault: () => void; target: any }) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        
        // Todo : add verifications on form data

        const data = JSON.stringify({
            "title": formData.get("title"),
            "caption": formData.get("caption"),
            "imgReference": formData.get("imgReference"),
            "category": formData.get("category"),
            "price": formData.get("price"),
        });

        props.handleNewItem(data);
    }

    return (
        <section>
            New item :
            <form method="post" onSubmit={handleSubmitItem}>
                {message}
                {error}
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
                    <div>Price</div>
                    <label>
                        <input name="price" type="decimal"></input>
                    </label>
                    <div>Category</div>
                    <label className="w-full">
                        <select name="category" defaultValue={data[0].label}>
                            {data.map((e: Category, i: number) => <option value={i+1} key={i}>{e.label}</option>)}
                        </select>
                    </label>
                </div>
 
                <button type="submit">Add item</button>
            </form>
        </section>
    )
}