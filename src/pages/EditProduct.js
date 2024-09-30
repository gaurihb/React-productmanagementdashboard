import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct({ products, editProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const productToEdit = products.find(product => product.id === parseInt(id));
  const [product, setProduct] = useState(productToEdit || { name: '', price: '', category: '', description: '' });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(product);
    navigate('/dashboard'); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
          placeholder="Product Price"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          required
          placeholder="Product Category"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
          placeholder="Product Description"
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
