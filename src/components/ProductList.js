import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';

function ProductList({ products, deleteProduct }) {
const navigate = useNavigate();

    return (
        <div>
        <h2>Product List</h2>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}  
            />
          ))
        ) : (
            <div>
          <p>No products available. Add some!</p>
        </div>
        )}
        <button onClick={() => navigate('/add-product')}>
          Add New Product
        </button>
        <button onClick={() => navigate('/')}>Go back to home</button>
      </div>
    );
  }

export default ProductList;
