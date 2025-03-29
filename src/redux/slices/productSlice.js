import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Fetch products from backend
export const fetchProducts = createAsyncThunk("product/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/api/product");
console.log(response,"hjvdjvbdjhbdhjbdhb")
    return response.data; // Assuming API returns { products: [...] }
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Fetch product by ID
export const fetchProductById = createAsyncThunk("product/fetchProductById", async (id) => {
    const response = await axios.get(`/api/product/${id}`);
    console.log(response,"myresponse")
    return response.data;
  });

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => { state.loading = true; })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const productReducer = productSlice.reducer;
