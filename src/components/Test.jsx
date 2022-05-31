import React, { useState } from "react";

export default function Test({ stock }) {
  const [x, setX] = useState(0);
  const aviableStock = () => {
    if (x < stock) {
      setX(x + 1);
    }
  };

  return (
    <div style={{ border: "1px solid red", height: "20vh" }}>
      Desde State = {x}
      <br />
      <button
        onClick={() => {
          aviableStock();
        }}
      >
        Sumar
      </button>
    </div>
  );
}
