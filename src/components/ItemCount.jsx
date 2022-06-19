import React, { useState } from "react";

export default function ItemCount({ stock, initial }) {
  const [counter, setCounter] = useState(initial);

  const itemCounter = (stock, counter, onAdd) => {
    if ((onAdd && counter < stock) || (!onAdd && counter > initial))
      setCounter(counter + (onAdd ? 1 : -1));
  };

  return (
    <div className="itemCount">
      <div className="itemCount__Buttons">
        <button
          onClick={() => {
            itemCounter(stock, counter, false);
          }}
          className="itemCount__Operator itemCount__Operator--minus"
        >
          -
        </button>
        <p className="itemCount__Counter">{counter > 1 ? <>{`${counter} unidades`}</> : <>{`${counter} unidad`}</>} </p>
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
