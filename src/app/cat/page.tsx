import Image from "next/image"
import { Key } from "react"
import { notFound } from 'next/navigation'
 
interface Category {
  label: string
}

export default async function Page() {
    const res = await fetch('http://localhost:3000/api/category')
    const data = await res.json()
    if (!data) notFound();
    
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                {data.map((e: Category, i: Key) => <li key={i}>{e.label}</li>)}
            </ol>

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