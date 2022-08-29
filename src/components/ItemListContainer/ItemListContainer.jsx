import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = () => {
  function onAdd(count){
    console.log(`Se seleccionaron ${count} productos`)
  }

  return (
    <div>
      <h1 className='my-5'>Nuestros Productos</h1>
      <ItemCount stock={8} onAdd={onAdd}/>
    </div>
  )
}
