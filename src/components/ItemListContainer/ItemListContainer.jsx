import { React, useState, useEffect } from 'react'
//import { ItemCount } from '../ItemCount/ItemCount'
//import { ItemList } from '../ItemList.jsx/ItemList'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'
export const ItemListContainer = () => {
  
  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetch("./json/productos.json")
    .then(response => response.json())
    .then(data => {
      const productCard = data.map((products, indice)=>
      <div className="card cardListStyle" key={indice} >
          <img src={"./img/" + products.img} className="card-img-top" alt="..." style={{width:"auto", height:"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{products.nombre}</h5>
              <p className="card-text">Marca: {products.marca}</p>
              <p className="card-text">Modelo: {products.modelo}</p>
              <p className="card-text">Precio: ${products.precio}</p>
              <p className="card-text">Stock: {products.stock}</p>
              <button className='btn btn-dark'><Link className='nav-link' to={"/productos/" + products.id}>Ver Productos</Link></button>
            </div>
      </div>
      )
      setProducts(productCard)
    })
    .catch(error => console.error(error))
  }, []);

  return (
    <div className='row'>
      <h1 className='my-5'>Nuestros Productos</h1>
      {products}
      {//<ItemList products={products}/>
      //<ItemCount stock={8} onAdd={onAdd}/>}
      }
    </div>
  )
  
}
