import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/orders";

const OrderService = {
  placeOrder: (order) => axios.post(API_BASE_URL, order),
  getAllOrders: () => axios.get(API_BASE_URL)
};

export default OrderService;
