import React from 'react'

export default function NavStringsLayout({navBarOptions}) {
  return (
    <>
    {navBarOptions.map(item => <a href={item}><li className="nav__li">{item}</li></a>)}
    </>
  )
}
