import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import ProductItem from "../../products/ProductItem";

const LatestCollection = () => {
  const { products } = useContext(Context);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]); // ⚠️ sửa từ latestProduct → products

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {latestProduct.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default LatestCollection;
