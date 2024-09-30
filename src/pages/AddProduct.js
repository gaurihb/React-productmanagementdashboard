import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct({addProduct}) {
    const [product, setProduct] = useState({ name: '', price: '', category: '', description: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...product,
    };

    addProduct(newProduct); 
    navigate('/'); 

  };


  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={product.category} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddProduct;
