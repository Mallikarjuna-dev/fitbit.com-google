"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "@/redux/slices/productSlice";

export default function AddProduct() {
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    dispatch(createProduct(formData));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      {error && <p className="text-red-500">{error}</p>}
      {product && <p className="text-green-500">Product created: {product.name}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded" />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full p-2 border rounded"></textarea>
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full p-2 border rounded" />

        <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded" />

        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white p-2 rounded">
          {loading ? "Uploading..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
