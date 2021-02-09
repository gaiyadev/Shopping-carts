import React from "react";
import Product from "../../products/Product";

const Main = (props) => {
  const { products, onAdd } = props;
  const productList = products.map((product) => {
    return <Product key={product.id} onAdd={onAdd} product={product}></Product>;
  });
  return (
    <main className="block col-2">
      <h2>Products</h2>

      <div className="row">{productList}</div>
    </main>
  );
};

export default Main;
