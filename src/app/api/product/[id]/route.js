import { NextResponse } from "next/server";
import Product from "../../../../../models/Product"; 
import { connectDB } from "@/lib/db"; 

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params; 

    // Find product by ID
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}
