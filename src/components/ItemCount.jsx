import React, { useState } from "react";
import ShoppingCartImage from "../Images/carritovector.png";

export default function ItemCount({ stock, initial }) {
  const [counter, setCounter] = useState(initial);

  const itemCounter = (stock, counter, onAdd) => {
    if ((onAdd && counter < stock) || (!onAdd && counter > initial)) setCounter(counter + (onAdd ? 1 : -1));
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
            itemCounter(stock, counter, false);
          }}
          className="itemCount__Operator"
        >
          -
        </button>
        <p className="itemCount__Counter">{counter}</p>
        <button
          onClick={() => {
            itemCounter(stock, counter, true);
          }}
          className="itemCount__Operator"
          
        >
          +
        </button>
      </div>
    </div>
  );
}
