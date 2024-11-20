"use server";

import { dbDelete, dbGet, dbPost } from "@/app/api/database";


export async function fetchCategories() {
        const query = `SELECT * from Category`;
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



export async function addCategory(data: string) {
    const { label } = JSON.parse(data);
    const query = `
        INSERT INTO Category(label)
        VALUES(?)
        `;
    const values = [label];
    
    let respBody;
    
    await dbPost(query, values)
        .then((res) => {
            console.log(res);
            respBody = "Successfully created article";
            return respBody;
        })
        .catch((err) => {
            respBody = err;
            throw respBody;
        });
}

export async function deleteCategory(label: string) {
    const query = `
        DELETE FROM Category
        WHERE label = ?;
        `;
    const values = [label];
    
    let respBody;
    
    await dbDelete(query, values)
        .then(() => {
            respBody = { message: "Successfully deleted article" };
        })
        .catch((err) => {
            respBody = err;
        });
    return respBody;
}