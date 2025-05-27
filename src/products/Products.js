import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const Products = () => {
  const [sp, setsp] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products`)
      .then(res => res.json())
      .then(data => {
        setsp(data);
      })
      .catch(error => console.error('Lỗi khi fetch:', error));
  }, []);

  console.log(data);

  return (
    <div>
      {sp.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} VND</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
