import React, { useEffect, useState } from "react";
import CartService from "../services/CartService";

const Checkout = ({ refreshTrigger }) => {
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

  const handlePlaceOrder = () => {
    CartService.clearCart()
      .then(() => {
        alert("Order placed!");
        fetchCart();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card p-4 shadow-sm">
      {cartItems.length > 0 ? (
        <>
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
                    <td>{item.product?.name}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.product?.price || 0) * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end fw-bold fs-5 mt-3">Total: ${total}</div>
          <button
            className="btn btn-success mt-3 w-100 w-md-auto"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </>
      ) : (
        <p className="text-center">Cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
