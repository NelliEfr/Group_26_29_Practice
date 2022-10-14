import { getProducts } from '../../requests/product'
import { Context } from '../../context'
import { useState, useEffect } from 'react'
import ProductsContainer from '../ProductsContainer'
import AddProductForm from '../AddProductForm'


function App() {

  const [ products, setProducts ] = useState([]);

  const createProduct = (product) => {
    setProducts(prev => [...prev, product])
  };

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div>
      <Context.Provider value={{ products, createProduct }}>
        <AddProductForm />
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
