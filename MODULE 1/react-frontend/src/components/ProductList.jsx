import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import CartService from "../services/CartService";

const ProductList = ({ refreshCart, refreshTrigger }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then(res => setProducts(res.data || []))
      .catch(err => console.error(err));
  }, [refreshTrigger]); // reload products when trigger changes

  const addToCart = (id, name) => {
    CartService.addToCart(id)
      .then(() => {
        alert(`${name} added to cart!`);
        if (refreshCart) refreshCart();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {products.length > 0 ? (
        products.map(p => (
          <div className="col" key={p.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={p.image || "https://via.placeholder.com/250"}
                alt={p.name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="text-muted flex-grow-1">{p.description}</p>
                <h6 className="text-success mb-3">${p.price}</h6>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(p.id, p.name)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
