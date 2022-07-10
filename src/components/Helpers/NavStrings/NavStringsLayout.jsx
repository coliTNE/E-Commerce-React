import React from "react";
import { Link } from "react-router-dom";

export default function NavStringsLayout({ navBarOption }) {
  const { title } = navBarOption;
  return (
    <>
      <li className="nav__item">
        <Link className="nav__link" to={`${title}`}>
          {title}
        </Link>
      </li>
    </>
  );
}
