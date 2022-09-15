import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="joysticks">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.precio}</p>


        </Link>
    )
}

export default Item;