import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import productosdata from '../../data/productosdata'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

  const {id} = useParams()

    const [Item, setItem] = useState({})

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() => res(productosdata.find(product => product.id === Number(id))), 2000);
    })

    useEffect(() => {
        getProduct()
        .then(res => setItem(res))
        .catch(error => console.error(error))
    }, [])

  return (
    <ItemDetail product={Item}/>
  )
}
