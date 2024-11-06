import { apiGet, apiPost } from "../database";

export async function POST(req: Request) {
 const body = await req.json();
 const { label } = body;

 const query = `
    INSERT INTO Category(label)
    VALUES(?)
  `;
 const values = [label];

 let status, respBody;
 await apiPost(query, values)
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
       SELECT * from Category
     `;
   
    let status, body;
    try {
     await apiGet(query)
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