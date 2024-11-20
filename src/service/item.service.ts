"use server";
import { dbGet, dbPost } from "@/app/api/database";


export async function fetchItems() {
    const query = `SELECT * from Item`;

    let body;
    try {
        await dbGet(query)
            .then((res) => {
                body = res;
            })
            .catch((err: Error) => {
                body = { error: err };
            });
        return body;

    } catch (error) {
        console.error(error);
    }
}

export async function addItem(data: string) {
    const { title, caption, imgReference, price, available, category } = JSON.parse(data);
    const query = `
        INSERT INTO Item(title, caption, imgReference, price, available, category)
        VALUES(?, ?, ?, ?, ?, ?)
        `;
    const values = [title, caption, imgReference, price, available, category];
    
    let respBody;
    
    await dbPost(query, values)
        .then(() => {
            respBody = { message: "Successfully created article" };
        })
        .catch((err) => {
            respBody = err;
        });
    return respBody;
}

export async function deleteItem(id: number) {
    const query = `
        DELETE FROM Item
        WHERE idItem = ?;
        `;
    const values = [id];
    
    let respBody;
    
    await dbPost(query, values)
        .then(() => {
            respBody = { message: "Successfully deleted article" };
        })
        .catch((err) => {
            respBody = err;
        });
    return respBody;
}