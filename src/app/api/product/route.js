import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "../../../../models/Product";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// 📌 Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔹 Helper function to upload files to Cloudinary
const uploadToCloudinary = async (fileBuffer, folder, resourceType = "image") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType, folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    );
    Readable.from(fileBuffer).pipe(stream);
  });
};

// 🚀 **GET: Fetch Products (Filter by Category)**
export async function GET(req) {
  try {
    await connectDB();
    
    // Extract category filter from query params
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const query = category ? { category } : {}; // Apply category filter if present
    const products = await Product.find(query);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// 🚀 **POST: Create Product with Image Uploads**
export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    
    // Extract text fields
    const name = formData.get("name");
    const description = formData.get("description");
    const price = parseFloat(formData.get("price"));
    const stock = parseInt(formData.get("stock"));
    const category = formData.get("category");
    const related_products = formData.get("related_products")?.split(",") || [];

    if (!name || !description || !price || !stock || !category) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Extract and upload images/videos
    const uploadedUrls = [];
    const files = formData.getAll("files");

    for (const file of files) {
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json({ error: "File size must be under 2MB" }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const resourceType = file.type.startsWith("video/") ? "video" : "image";
      const uploadedUrl = await uploadToCloudinary(buffer, "products", resourceType);
      uploadedUrls.push(uploadedUrl);
    }

    // Create product entry
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      related_products,
      files: uploadedUrls, // Store Cloudinary URLs
    });

    return NextResponse.json({ message: "Product created successfully", product }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

// 🚀 **PUT: Update Product**
export async function PUT(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const id = formData.get("id");

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    // Extract updated fields
    const name = formData.get("name");
    const description = formData.get("description");
    const price = parseFloat(formData.get("price"));
    const stock = parseInt(formData.get("stock"));
    const category = formData.get("category");
    const related_products = formData.get("related_products")?.split(",") || [];

    // Extract and upload new images/videos (if any)
    const uploadedUrls = [];
    const files = formData.getAll("files");

    for (const file of files) {
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json({ error: "File size must be under 2MB" }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const resourceType = file.type.startsWith("video/") ? "video" : "image";
      const uploadedUrl = await uploadToCloudinary(buffer, "products", resourceType);
      uploadedUrls.push(uploadedUrl);
    }

    const updatedData = {
      name,
      description,
      price,
      stock,
      category,
      related_products,
    };

    if (uploadedUrls.length > 0) {
      updatedData.images = uploadedUrls; // Update images only if new ones are uploaded
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

// 🚀 **DELETE: Remove Product**
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}

// ⏳ **Disable Body Parser for File Uploads**
export const config = {
  api: {
    bodyParser: false,
  },
};
