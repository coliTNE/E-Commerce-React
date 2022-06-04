import React, { useState } from "react";
import ShoppingCartImage from "../Images/carritovector.png";

export default function ItemCount({ stock, initial }) {
  const [x, setX] = useState(initial);

  const itemCounter = (stock, x, onAdd) => {
    if ((onAdd && x < stock) || (!onAdd && x > initial)) setX(x + (onAdd ? 1 : -1));
  };

  return (
    <div className="itemCount__Card">
      <img
        src={ShoppingCartImage}
        alt="carritoMarron"
        className="itemCount__Img"
      />
      <div className="itemCount__Buttons">
        <button
          onClick={() => {
            itemCounter(stock, x, false);
          }}
          className="itemCount__Operator"
        >
          -
        </button>
        <p className="itemCount__Counter">{x}</p>
        <button
          onClick={() => {
            itemCounter(stock, x, true);
          }}
          className="itemCount__Operator"
          
        >
          +
        </button>
      </div>
    </div>
  );
}
