import React from 'react'
import productosdata from '../../data/productosdata'

export const Item = ({productosdata}) => {
  return (
    <div className="card border-primary mb-3" key={productosdata.id} style={{maxWidth: '15rem', margin: '10px'}}>
    <div className="card-header">{productosdata.nombre}</div>
    <div className="card-body">
        <h4 className="card-title">{productosdata.precio}</h4>
        <p className="card-text">{productosdata.marca}</p>
        <p className="card-text">{productosdata.stock}</p>
    </div>
    </div>
  )
}
