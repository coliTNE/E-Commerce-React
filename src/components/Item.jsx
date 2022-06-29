import React from "react";

export default function Item({ product }) {
  const { brand, type, name, price, pictureUrl, secondPictureUrl } = product;

  return (
    <div className="main__shoeCard">
      <div className="shoeCard__imgContainer">
        <img
          src={pictureUrl}
          alt={`zapatilla deportiva ${brand}`}
          className="shoeCard__img"
        />
        <img
          src={secondPictureUrl}
          alt={`zapatilla deportiva ${brand}`}
          className="shoeCard__secondaryImg"
        />
      </div>
      <div className="shoeCard__dataContainer">
        <span className="shoeCard__type">{type}</span>
        <p className="shoeCard__descrip">{name}</p>
        <h3 className="shoeCard__price">{`$${price?.toLocaleString("es")}`}</h3>
      </div>
    </div>
  );
}
