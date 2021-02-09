import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import data from "./products/data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAddHandler = (product) => {
    console.log(">>>");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveHandler = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }; 

  return (
    <div className="App">
      <Header countCartItem={cartItems.length} />
      <div className="row">
        <Main onAdd={onAddHandler} products={products} />
        <Basket
          onRemove={onRemoveHandler}
          onAdd={onAddHandler} 
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}

export default App;
