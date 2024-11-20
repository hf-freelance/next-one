import { dbGet } from "@/app/api/database";

class CategoryService {
    async fetchCategories() {
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
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoryService;