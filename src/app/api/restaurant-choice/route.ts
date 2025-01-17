export async function GET(request: Request) {
    return new Response("Hello from restaurant-choice API!");
  }
  
  export async function POST(request: Request) {
    const body = await request.json();
    return new Response(`Received: ${JSON.stringify(body)}`);
  }
  