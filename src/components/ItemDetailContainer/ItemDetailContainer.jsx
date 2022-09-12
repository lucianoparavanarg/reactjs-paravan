import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
  const [productoCard, setProductoCard] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    fetch("../json/productos.json")
    .then(response => response.json())
    .then(data => {
      const productX = data.find(productoCard => productoCard.id == id)
      setProductoCard(productX)
    .catch(error => console.error(error))
    })
  }, []);

  return (
    <>
        <ItemDetail producto={productoCard}/>
    </>
  )
}
