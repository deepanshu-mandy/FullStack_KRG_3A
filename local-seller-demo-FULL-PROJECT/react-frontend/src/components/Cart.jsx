import React, { useEffect, useState } from "react";
import CartService from "../services/CartService";

const Cart = ({ refreshTrigger }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = () => {
    CartService.getCart()
      .then((res) => setCartItems(res.data || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCart();
  }, [refreshTrigger]);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="card p-4 shadow-sm">
      {cartItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.product?.name || "N/A"}</td>
                  <td>{item.quantity || 0}</td>
                  <td>${(item.product?.price || 0) * (item.quantity || 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Cart is empty</p>
      )}
      <div className="text-end fw-bold fs-5 mt-3">Total: ${total}</div>
    </div>
  );
};

export default Cart;
