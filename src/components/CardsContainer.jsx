import React from 'react'
import CardsLayout from './CardsLayout';

export default function CardsContainer() {
  let alumnos =  ["coli", "cocoro", "quiquin"];
  return <CardsLayout alumnos = {alumnos}/>
}
