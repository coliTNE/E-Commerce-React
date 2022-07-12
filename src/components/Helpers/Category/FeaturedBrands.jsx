import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedBrands({ item }) {
  const { title, pictureUrl } = item;

  const navigate = useNavigate();

  const redirect = (brand) => {
    navigate(`/category/${brand}`);
  };

  return (
    <div
      className={`featBrand__item featBrand__item-${title}`}
      onClick={() => redirect(title)}
    >
      <img
        src={pictureUrl}
        alt={`${title} logo`}
        className="featBrand__item-image"
      />
    </div>
  );
}
