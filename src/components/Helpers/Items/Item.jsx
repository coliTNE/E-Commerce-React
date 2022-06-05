import React from "react";

export default function Item({ product }) {
  const { brand, title, type, description, price, pictureUrl } = product;
  return (
    <div className="main__shoeCard">
      <div className="shoeCard__imgContainer">
        <img
          src={pictureUrl}
          alt={`zapatilla deportiva ${brand}`}
          className="shoeCard__img"
        />
        <img src={title} alt={`${brand} logo`} className="shoeCard__brand" />
      </div>
      <div className="shoeCard__dataContainer">
        <p className="shoeCard__type">{type}</p>
        <p className="shoeCard__descrip">{description}</p>
        <h3 className="shoeCard__price">{price}</h3>
      </div>
    </div>
  );
}
