export async function GET(request: Request) {
    return new Response("Hello tastefully!");
  }
  
  export async function POST(request: Request) {
    const body = await request.json();
    return new Response(`Received: ${JSON.stringify(body)}`);
  }
  