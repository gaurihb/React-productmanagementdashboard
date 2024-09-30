import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductList from './components/ProductList';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Product Management Dashboard</h1>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
          <Route path="/edit-product/:id" element={<EditProduct products={products} editProduct={editProduct} />} />
          <Route
            path="/dashboard"
            element={<ProductList products={products} deleteProduct={deleteProduct} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


