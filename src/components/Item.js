import React from 'react';

const Item = ({ info }) => {
    return (
        <a href='' className="joysticks">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.precio}</p>


        </a>
    )
}

export default Item;