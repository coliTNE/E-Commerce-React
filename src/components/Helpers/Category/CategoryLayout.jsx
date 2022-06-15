import React from "react";
import { Link } from "react-router-dom";

export default function CategoryLayout({ categoryOption }) {
    const { title , id } = categoryOption;
  return (
    <>
      <li className="filter__listItem">
        <Link reloadDocument to={`/category/${title}`} key={id}>{title}</Link>
      </li>
    </>
  );
}
