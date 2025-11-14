import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductForm from "./components/ProductForm";

function App() {
  const [cartTrigger, setCartTrigger] = useState(0);
  const [productTrigger, setProductTrigger] = useState(0);

  // Refresh cart when a product is added to cart
  const refreshCart = () => setCartTrigger(prev => prev + 1);

  // Refresh product list when a new product is added
  const refreshProducts = () => setProductTrigger(prev => prev + 1);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">🛍️ Apna Dukaan</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex flex-wrap gap-2">
              <a className="btn btn-light" href="#products">Products</a>
              <a className="btn btn-light" href="#cart">Cart</a>
              <a className="btn btn-warning" href="#checkout">Checkout</a>
              <a className="btn btn-success" href="#add-product">Add Product</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Add Product Section */}
        <section id="add-product" className="mb-5">
          <h2 className="text-center mb-4">Add New Product</h2>
          <ProductForm onProductAdded={refreshProducts} />
        </section>

        {/* Available Products */}
        <section id="products" className="mb-5">
          <h2 className="text-center mb-4">Available Products</h2>
          <ProductList refreshCart={refreshCart} refreshTrigger={productTrigger} />
        </section>

        {/* Cart */}
        <section id="cart" className="mb-5">
          <h2 className="text-center mb-4">Your Cart</h2>
          <Cart refreshTrigger={cartTrigger} />
        </section>

        {/* Checkout */}
        <section id="checkout" className="mb-5">
          <h2 className="text-center mb-4">Checkout</h2>
          <Checkout refreshTrigger={cartTrigger} />
        </section>
      </div>
    </div>
  );
}

export default App;
