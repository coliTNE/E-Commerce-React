import React from 'react'
import Item from './Item'

export default function ItemList({products}) {
  return (
    <div className="main__shoesCarrousel">
      {products?.map(product => <Item key={products.id} product={product}/>)}
    </div>
  )
}
