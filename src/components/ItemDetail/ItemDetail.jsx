import React, { useState } from 'react'
//import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'



export const ItemDetail = ({productoCard}) => {
    const [cantidad, setCantidad] = useState(1);
    
    //{const onAdd = (count) => {console.log(count)}}
    
    function agregarAlCarrito(){
        const productoCarrito = {id: productoCard.id, cantidad: 1}
        console.log(productoCarrito)
    }

    const cantidadProducto = (operacion)=> {
        if(operacion == "+") {
            if(cantidad < productoCard.stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if(cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

  return (
    <>
         <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../img/"+ productoCard.img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{productoCard.nombre}</h5>
                    <p className="card-text">Marca: {productoCard.marca} </p>
                    <p className="card-text">Modelo: {productoCard.modelo} </p>
                    <p className="card-text">Precio: ${productoCard.precio} </p>
                    <p className="card-text">Stock: {productoCard.stock} </p>
                    {//<ItemCount stock={productoCard.stock} onAdd={onAdd} />
}
                    <p>{cantidad}</p>
                    <button className='btn btn-dark' onClick={() => cantidadProducto("-")}>
                        -
                    </button>
                    <button className='btn btn-dark' onClick={() => cantidadProducto("+")}>
                        +
                    </button>
                    <button className='btn btn-dark' onClick={() => agregarAlCarrito(productoCard)}>Comprar</button>
                </div>
            </div>
        </div>
        </div>
    </>

  )
}
