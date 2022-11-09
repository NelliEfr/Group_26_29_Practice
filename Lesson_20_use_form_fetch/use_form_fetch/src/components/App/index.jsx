import AddProductForm from "../AddProductForm";
import { useState, useEffect } from 'react'
import { getAllProducts } from '../../requests/products_req'
import { Context } from '../../context'
import ProductsContainer from "../ProductsContainer";

function App() {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getAllProducts(setProducts)
  }, [])

  const createNewProduct = product => {
    setProducts(prev => [...prev, product])
  }

  return (
    <div>
      <Context.Provider value={{ products, createNewProduct }}>
        <AddProductForm />
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
