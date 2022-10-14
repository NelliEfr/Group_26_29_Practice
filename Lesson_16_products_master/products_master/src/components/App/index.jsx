import { getProducts } from '../../requests/product'
import { Context } from '../../context'
import { useState, useEffect } from 'react'
import ProductsContainer from '../ProductsContainer'


function App() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div>
      <Context.Provider value={{products}}>
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
