import React from "react";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 200 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  const cartItemsList = cartItems.map((item) => {
    return (
      <div className="row" key={item.id}>
        <div> {item.name}</div>

        <div className="col-2">
          <button className="add" onClick={() => onAdd(item)}>
            +
          </button>
          <button className="remove" onClick={() => onRemove(item)}>
            -
          </button>
        </div>
        <div className="col-2 text-right">
          {item.qty} x {item.price.toFixed(2)}
        </div>
      </div>
    );
  });
  return (
    <aside className="block col-1">
      <h2>cart Items</h2>
      <div>{cartItems.length === 0 && <p>Cart is empty</p>}</div>
      {cartItemsList}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2"> Item Price </div>
            <div className="col-1 text-right ">${itemPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2"> Tax Price </div>
            <div className="col-1 text-right ">${taxPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2"> Shipping Price </div>
            <div className="col-1 text-right ">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right ">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <hr />
          <div className="row">
            <button onClick={() => alert("checkout")}>Check Out</button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
