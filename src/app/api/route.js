import { connectDB } from "@/lib/db";

export async function GET(req) {
  await connectDB();
  return new Response(JSON.stringify({ message: "API is working!" }), {
    status: 200,
  });
}
