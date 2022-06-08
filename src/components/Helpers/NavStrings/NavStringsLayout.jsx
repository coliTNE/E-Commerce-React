import React from "react";

export default function NavStringsLayout({ navBarOptions }) {
  return (
    <>
      {navBarOptions.map((item) => (
        <a href={item} key={item.id}>
          <li key={item.id} className="nav__li">
            {item}
          </li>
        </a>
      ))}
    </>
  );
}
