import React from 'react'
import { Item } from '../Item.jsx/Item'
export const ItemList = ({products}) => {
  
  const productsList = products;
  console.log(productsList)

  return (
    <div className='row m-2'>
      {productsList.map((productosdata)=> (
          <Item product={productosdata} key={productosdata.id}/>
      ))}
    </div>
    
  );
};
