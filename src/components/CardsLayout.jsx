import React from 'react'

export default function CardsLayout({alumnos}) {
  return (<>
  {alumnos.map(item => <p>{item}</p>)}
  </>
  )
}
