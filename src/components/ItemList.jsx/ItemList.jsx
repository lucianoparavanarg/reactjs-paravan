import React from 'react'
import productosdata from '../../data/productosdata';
import { Item } from '../Item.jsx/Item'
export const ItemList = ({list}) => {
  return (
    <div>
      {list.map((productosdata)=> (
          <Item producto={productosdata} key={productosdata.id}/>
      ))}
    </div>
    
  );
};
