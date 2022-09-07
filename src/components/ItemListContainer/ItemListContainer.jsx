import { React, useState, useEffect } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList.jsx/ItemList'
import productosdata from '../../data/productosdata'

export const ItemListContainer = () => {
  function onAdd(count){
    console.log(`Se seleccionaron ${count} productos`)
  }

  const [products, setProducts] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
      const getProductosData = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(productosdata);
          }, 2000);
      });

      getProductosData
      .then((response)=> setProducts(response))
      .catch(error => console.error(error))
  //    .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className='my-5'>Nuestros Productos</h1>
      <ItemList products={products}/>
      <ItemCount stock={8} onAdd={onAdd}/>
    </div>
  )
  
}
