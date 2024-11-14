import { dbGet, dbPost } from "@/app/api/database";
import { Item } from "@/app/cat/page";

class ItemService {
    async fetchItems() {
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

    async addItem(data: Item) {
        const { title, caption, imgReference, price, available, category } = data;
       
        const query = `
           INSERT INTO Item(title, caption, imgReference, price, available, category)
           VALUES(?, ?, ?, ?, ?, ?)
         `;
        const values = [title, caption, imgReference, price, available, category];
       
        let status, respBody;
        
        await dbPost(query, values)
            .then(() => {
                respBody = { message: "Successfully created article" };
            })
            .catch((err) => {
                respBody = err;
            });
        return Response.json(respBody, {
         status,
        });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ItemService;