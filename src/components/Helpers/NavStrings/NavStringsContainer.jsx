import React from 'react'
import NavStringsLayout from './NavStringsLayout'

export default function NavStringsContainer() {
    const navBarOptions = ['Inicio','Nosotros','Contacto']
  return (
    <><NavStringsLayout navBarOptions={navBarOptions}/></>
  )
}
