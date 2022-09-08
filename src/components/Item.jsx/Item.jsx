import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {

  const {id, nombre, precio, marca, stock} = product

  return (
    <div className="card border-primary mb-3" 
    key={product.id} 
    style={{maxWidth: '15rem', margin: '10px', color: 'black'}}
    >
    
    <div className="card-header">{product.nombre}</div>
    <div className="card-body">
        <h5 className="card-title">Precio: {product.precio}</h5>
        <p className="card-text">Marca: {product.marca}</p>
        <p className="card-text">Stock: {product.stock}</p>
    <Link to={`/detalles/${id}`}>
      <button type="button" className="btn btn-primary btn-sm">Detalles</button>
    </Link>
    </div>
  </div>
  )
}
