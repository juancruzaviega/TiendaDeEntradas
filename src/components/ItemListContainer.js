import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export const ItemListContainer = ({ greetings }) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
    }, [categoriaId]);


    return (
        <>
            <h2>{greetings}</h2>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;