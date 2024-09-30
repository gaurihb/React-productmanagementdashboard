import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ onSubmit, product = {} }) {
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [category, setCategory] = useState(product.category || '');
  const [stock, setStock] = useState(product.stock || '');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !category || stock === '') {
        alert('Please fill in all fields with valid data.');
        return;
      }

      if (isNaN(price) || isNaN(stock) || parseInt(price) < 0 || parseFloat(stock) < 0) {
        alert('Price and Stock should be valid positive numbers.');
        return;
      }

    const newProduct = {
        id: Date.now(), 
        name, 
        price: parseFloat(price), 
        category, 
        stock: parseFloat(stock)
     };
    onSubmit(newProduct);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name</label>
        <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        placeholder="Enter product name"
        />
      </div>
      <div>
        <label>Price</label>
        <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        min="0" 
        step="1" 
        required
        placeholder="Enter product price"
         />
      </div>
      <div>
        <label>Category</label>
        <input 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required 
        placeholder="Enter product category"
        />
      </div>
      <div>
        <label>Stock</label>
        <input 
        type="number" 
        value={stock} 
        onChange={(e) => setStock(e.target.value)} 
        min="0" 
        step="1" 
        required 
        placeholder="Enter product stock"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default ProductForm;
