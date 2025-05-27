import React from "react";

const ProductItem = ({ id, name, image_url, price }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={image_url} alt={name} width="100%" height="250px" />
      <h3>{name}</h3>
      <p>{price.toLocaleString()} VNĐ</p>
    </div>
  );
};

export default ProductItem;
