import React from 'react'
import ShoppingCartImage from '../Images/carritovector.png'

export default function CardsWidget() {
    let shoppingCart = 0
  return (
    <div><img src={ShoppingCartImage} alt="carritoMarron" className="nav__img"/>{shoppingCart}</div>
  )
}
