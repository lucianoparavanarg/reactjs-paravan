import React, {useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import productosdata from '../../data/productosdata'
import './ItemDetail.css'



export const ItemDetail = ({product}) => {
    
    const onAdd = (count) => {
        console.log(count)
    }
    

  return (
    <div className="card mb-3 cardStyle">
        <div className="card-header">{product.nombre}</div>
        <div className="card-body">
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
            <p className="card-text">{product.precio}</p>
            <p className="card-text">{product.marca}</p>
            <p className="card-text">{product.stock}</p>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        <div className="card-footer text-muted">
            
        </div>
    </div>

  )
}
