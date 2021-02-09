import React from "react";

const Header = (props) => {
  const { countCartItem } = props;
  return (
    <header className="row block center ">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>

      <div>
        <a href="#/cart">
          Cart {""}
          {countCartItem ? (
            <button className="badge">{countCartItem}</button>
          ) : (
            <button className="badge">0</button>
          )}
        </a>{" "}
        <a href="#/signin">signin</a>
      </div>
    </header>
  );
};

export default Header;
