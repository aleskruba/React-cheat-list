import * as React from 'react';
import './style.css';

export default function App() {
  const [products, setProducts] = React.useState([
    { id: 1, title: 'title 1 -', quantity: 1 },
    { id: 2, title: 'title 2 - ', quantity: 1 },
    { id: 3, title: 'title 3 - ', quantity: 1 },
  ]);

  const [selectedProductID, setSelectedproductID] = React.useState(null);

  const selectedProduct = products.find( (p)=> p.id ===selectedProductID)

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else return product;
      });
    });
  };

  
  const decrement = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id && product.quantity >0) {
          
          return { ...product, quantity: product.quantity - 1 };
          
        } 
        
        else return product;
      });
    });
  };


  const handleChoose = (id) => {
    setSelectedproductID(id);
  };

  return (
    <div>
      <h4>All Products</h4>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <span>
              {' '}
              {product.title}
              <button onClick={() => handleChoose(product.id)}>choose</button>
            </span>
            <div className="quantity">
              <button onClick={() => decrement(product.id)}>-</button>
              <span>{product.quantity} </span>
              <button onClick={() => increment(product.id)}>+</button>
            </div>
          </div>
        );
      })}
      <h4>Selected product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
}
