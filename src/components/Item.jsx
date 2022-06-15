import React from "react";

export default function Item({ product }) {
  const {
    brand,
    title,
    type,
    description,
    price,
    pictureUrl,
    secondPictureurl,
  } = product;

  return (
      <div className="main__shoeCard">
        <div className="shoeCard__imgContainer">
          <img src={title} alt={`${brand} logo`} className="shoeCard__brand" />
          <img
            src={pictureUrl}
            alt={`zapatilla deportiva ${brand}`}
            className="shoeCard__img"
          />
          <img
            src={secondPictureurl}
            alt={`zapatilla deportiva ${brand}`}
            className="shoeCard__secondaryImg"
          />
        </div>
        <div className="shoeCard__dataContainer">
          <span className="shoeCard__type">{type}</span>
          <p className="shoeCard__descrip">{description}</p>
          <h3 className="shoeCard__price">{price}</h3>
        </div>
      </div>
  );
}
