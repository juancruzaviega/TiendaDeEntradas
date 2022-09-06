import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({ greetings }) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    };

    return (
        <>
            <h2>{greetings}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemList