import React from "react";
import NavStringsLayout from "./NavStringsLayout";

export default function NavStringsContainer() {
  const navBarOptions = [
    {
      id: 1,
      title: "Inicio",
    },
    {
      id: 2,
      title: "Nosotros",
    },
    {
      id: 3,
      title: "Contacto",
    },
  ];
  return (
    <>
      {navBarOptions?.map(navBarOption => <NavStringsLayout key={navBarOption.id} navBarOption={navBarOption}/>)}
    </>
  );
}
