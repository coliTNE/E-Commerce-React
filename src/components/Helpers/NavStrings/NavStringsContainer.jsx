import React from "react";
import NavStringsLayout from "./NavStringsLayout";

export default function NavStringsContainer() {
  const navBarOptions = [
    {
      id: 1,
      title: "inicio",
    },
    {
      id: 2,
      title: "nosotros",
    },
    {
      id: 3,
      title: "contacto",
    },
  ];
  return (
    <>
      {navBarOptions?.map(navBarOption => <NavStringsLayout key={navBarOption.id} navBarOption={navBarOption}/>)}
    </>
  );
}
