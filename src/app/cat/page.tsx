import Image from "next/image"
import { notFound } from 'next/navigation'
import categoryService from "@/service/category.service"
import { fetchItems } from "@/service/item.service"
import ItemTable from "./tableItem"
import CatTable from "./tableCategory"
 
export interface Category {
  label: string
}

export interface Item {
    title: string,
    caption: string,
    imgReference: string,
    available: boolean,
    price: number,
    category: string
}
  

export default async function Page() {
    let categories: Category[] = [], items: Item[] = [], itemsNumber = 0;

    const data = await categoryService.fetchCategories();
    if (!data) notFound();
    else categories = data;

    const dataItems = await fetchItems();
    if (!dataItems) notFound();
    else {
        items = dataItems;
        itemsNumber = items.length;
    }

    return (
        <div className="items-center min-h-screen w-full p-8 pb-10 px-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h3>Catégories</h3>
                <CatTable data={categories} />

                <hr />
                <h3>Articles de la boutique</h3>
                <p>{itemsNumber} articles dans la boutique</p>
                <ItemTable data={items} categories={categories} />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                    />
                    Hello
                </a>
            </footer>
            
        </div>

  )
}