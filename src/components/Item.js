import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

export const Item = ({ info }) => {
    const nombre = useContext(CartContext);
    console.log('Item:', nombre);
    return (
        <Link to={`/detalle/${info.id}`} className="joysticks">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.precio}</p>


        </Link>
    )
}

export default Item;