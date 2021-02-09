import React from "react";

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" alt={product.name} src={product.image}></img>
      <h3>{product.name}</h3>
      <div> ${product.price} </div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Card</button>
      </div>
    </div>
  );
};

export default Product;
