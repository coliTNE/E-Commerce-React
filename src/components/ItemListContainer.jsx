import React from 'react'

export default function ItemListContainer({greeting, name}) {
  return (
    <h2 className='main__h2'>{greeting}, {name}</h2>
  )
}
