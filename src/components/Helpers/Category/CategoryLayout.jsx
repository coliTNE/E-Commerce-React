import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryLayout({ categoryOption }) {
  const { title, id, pictureUrl } = categoryOption;
  const navigate = useNavigate();

  const redirect = (brand) => {
    navigate(`/category/${brand}`);
  };
  return (
    <>
      <li className="filter__listItem">
        <div className="filter__imgContainer">
          <img
            key={id}
            src={pictureUrl}
            alt={`${title} logo`}
            className="filter__img"
            onClick={() => redirect(title)}
          />
        </div>
      </li>
    </>
  );
}
