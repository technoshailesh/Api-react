import React, {  useState } from 'react';
import axios from 'axios';

function App({product}){
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const [products, setProducts] = useState([]);
 

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const clearSingleProduct = (productID) => {
    const filteredArray = products.filter((item) => item.id!= productID);
    setProducts(filteredArray);
  };

  function capitalizeFirstLetter(str) {
    return  str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }

 
  const capHandler=()=> {
    setProducts(products.map(product => ({...product , title: capitalizeFirstLetter(product.title)})))
  }
  
  return (
    <>
      <button onClick={fetchData}>Fetch Products</button>
      <button onClick={clearProducts}>Clear Products</button>
      <button onClick={(product)=>capHandler(product.id)}>Capitalize</button>
      <div>
        {products.map((product) => {
          return (
            // 
            <div>
              <h3 className="productName">{product.title}</h3>
              
              {/* <button onClick={() => clearSingleProduct(product.id)}>
                Clear
              </button> */}
          
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App