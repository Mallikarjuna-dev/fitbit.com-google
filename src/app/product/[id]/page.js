"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/redux/slices/productSlice";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>

      {/* Display Product Image */}
      <div className="my-4">
        {product.files.length > 0 ? (
          <Image
            src={product.files[0]}
            alt={product.name}
            width={500}
            height={300}
            className="rounded-lg"
          />
        ) : (
          <Image
            src="/default-image.jpg"
            alt="Default"
            width={500}
            height={300}
            className="rounded-lg"
          />
        )}
      </div>

      <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
      <p className="text-gray-700 mt-2">Stock: {product.stock}</p>

      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
