import React, { useState } from "react";
import ShoppingCartImage from "../Images/carritovector.png";

export default function ItemCount({ stock }) {
  const [x, setX] = useState(0);
  const countPlus = () => {
    if (x < stock) {
      setX(x + 1);
    }
  };
  const countMinus = () => {
    if (x > 0) {
      setX(x - 1);
    }
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
            countMinus();
          }}
          className="itemCount__Operator"
        >
          -
        </button>
        <p className="itemCount__Counter">{x}</p>
        <button
          onClick={() => {
            countPlus();
          }}
          className="itemCount__Operator"
        >
          +
        </button>
      </div>
    </div>
  );
}
