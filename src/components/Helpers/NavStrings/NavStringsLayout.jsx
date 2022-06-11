import React from "react";

export default function NavStringsLayout({ navBarOption }) {
  const {title} = navBarOption
  return (
    <>
        <a href={title}>
          <li className="nav__li">
            {title}
          </li>
        </a>
    </>
  );
}
