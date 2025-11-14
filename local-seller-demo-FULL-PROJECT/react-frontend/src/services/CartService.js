import axios from "axios";
const API_URL = "http://localhost:8080/api/cart";

const CartService = {
  getCart: () => axios.get(API_URL),
  addToCart: (productId) => axios.post(`${API_URL}/add/${productId}`),
  clearCart: () => axios.delete(`${API_URL}/clear`) // <-- add this
};

export default CartService;
