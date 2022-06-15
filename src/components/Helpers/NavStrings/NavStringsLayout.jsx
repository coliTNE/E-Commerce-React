import React from "react";
import { Link } from "react-router-dom";

export default function NavStringsLayout({ navBarOption }) {
  const { title } = navBarOption;
  return (
    <>
      <li className="nav__li">
        <Link to={`${title}`}>{title}</Link>
      </li>
    </>
  );
}
