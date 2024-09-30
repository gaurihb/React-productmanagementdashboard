import React from 'react';
import { useNavigate} from 'react-router-dom';

function ProductItem({ product, deleteProduct }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-product/${product.id}`); 
      };

  return (
    <div class="product">
    <h3>{product.name}</h3>
    <p>Price: Rs.{product.price}</p>
    <p>Category: {product.category}</p>
    <p>Stock: {product.description}</p>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={() => deleteProduct(product.id)}>Delete</button>
  </div>
  );
}

export default ProductItem;
