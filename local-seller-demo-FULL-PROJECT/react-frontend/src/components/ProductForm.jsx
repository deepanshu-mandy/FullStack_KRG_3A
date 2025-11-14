import React, { useState } from "react";
import ProductService from "../services/ProductService";

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, description, price: parseFloat(price), image };
    ProductService.addProduct(product)
      .then(() => {
        alert("Product added successfully!");
        setName(""); setDescription(""); setPrice(""); setImage("");
        if (onProductAdded) onProductAdded(); // Trigger product list refresh
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="form-control" required/>
      </div>
      <div className="mb-2">
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="form-control" required/>
      </div>
      <div className="mb-2">
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="form-control" required/>
      </div>
      <div className="mb-2">
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="form-control"/>
      </div>
      <button type="submit" className="btn btn-success">Add Product</button>
    </form>
  );
};

export default ProductForm;
