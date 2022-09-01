import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import productosdata from '../../data/productosdata';

const ItemContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getProductosData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productosdata);
            }, 1500);
        });

        getProductosData
        .then((response)=> setProductos(response));
    }, []);

    <PokeList list={pokemones} />

}

export default ItemContainer
