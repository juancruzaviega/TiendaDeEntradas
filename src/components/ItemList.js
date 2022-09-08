import React from 'react'
import Item from './Item'

const ItemList = ({ data = [] }) => {
    return (
        data.map(joysticks => <Item key={joysticks.id} info={joysticks} />)
    );
}

export default ItemList;