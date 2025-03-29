import { connectDB } from "@/lib/db";
import Order from "../../../../models/Order";

export async function GET(req) {
  await connectDB();
  const orders = await Order.find();
  return Response.json(orders);
}

export async function POST(req) {
  await connectDB();
  const { user, products, totalPrice } = await req.json();
  const order = await Order.create({ user, products, totalPrice });
  return Response.json(order, { status: 201 });
}
