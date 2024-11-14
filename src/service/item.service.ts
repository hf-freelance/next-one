import { apiGet } from "@/app/api/database";

class ItemService {

    async fetchItems() {
        const query = `
        SELECT * from Item;
      `;
    
     let body;
     try {
      await apiGet(query)
       .then((res) => {
            body = res;
       })
       .catch((err: Error) => {
            body = { error: err };
       });
       return body;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error.message);
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ItemService;