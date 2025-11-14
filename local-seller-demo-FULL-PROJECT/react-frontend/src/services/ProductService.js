import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

const ProductService = {
  getProducts: () => axios.get(API_URL),
  addProduct: (product) => axios.post(API_URL, product) // New product
};

export default ProductService;
