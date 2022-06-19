import React from "react";
import { Link } from "react-router-dom";

export default function CategoryLayout({ categoryOption }) {
    const { title , id , pictureUrl} = categoryOption;
  return (
    <>
      <li className="filter__listItem">
        <Link reloadDocument to={`/category/${title}`} key={id}><div className="filter__imgContainer"><img src={pictureUrl} alt={`${title} logo`} className="filter__img"/></div></Link>
      </li>
    </>
  );
}
