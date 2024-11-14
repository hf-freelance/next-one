import { dbDelete, dbGet, dbPost } from "../database";

export async function POST(req: Request) {
 const body = await req.json();
 const { title, caption, imgReference, category } = body;

 const query = `
    INSERT INTO Item(title, caption, imgReference, category)
    VALUES(?, ?, ?, ?)
  `;
 const values = [title, caption, imgReference, category];

 let status, respBody;
 
 await dbPost(query, values)
  .then(() => {
   status = 200;
   respBody = { message: "Successfully created article" };
  })
  .catch((err) => {
   status = 400;
   respBody = err;
  });
 return Response.json(respBody, {
  status,
 });
}

export async function GET() {
    const query = `
       SELECT * From Item;
     `;
   
    let status, body;
    try {
     await dbGet(query)
      .then((res) => {
       status = 200;
       body = res;
      })
      .catch((err: Error) => {
       status = 400;
       body = { error: err };
      });
     return Response.json(body, {
      status,
     });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
     console.error(error.message);
     return Response.json(
      { error: error },
      {
       status: 400,
      }
     );
    }
   }

   export async function DELETE(req: Request) {
    const body = await req.json();
    const { idItem } = body;
    const query = `
       DELETE FROM Item WHERE idItem = ?;
     `;
      
     const values = [idItem];
    
     let status, respBody;
     
     await dbDelete(query, values)
      .then(() => {
       status = 200;
       respBody = { message: "Successfully removed article" };
      })
      .catch((err) => {
       status = 400;
       respBody = err;
      });
     return Response.json(respBody, {
      status,
     });
   }