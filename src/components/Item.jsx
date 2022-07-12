import React from "react";

export default function Item({ product }) {
  const { brand, type, name, price, pictureUrl, secondPictureUrl } = product;

  return (
    <div className="shoeCards__card">
      <div>
        <img
          src={pictureUrl}
          alt={`zapatilla deportiva ${brand}`}
          className="card__img"
        />
        <img
          src={secondPictureUrl}
          alt={`zapatilla deportiva ${brand}`}
          className="card__secondaryImg"
        />
      </div>
      <div className="card__dataContainer">
        <span>{type}</span>
        <p>{name}</p>
        <h3>{`$${price?.toLocaleString("es")}`}</h3>
      </div>
    </div>
  );
}
