import React from 'react';
import '../app/styles.css';

export const ItemDetail = ({ data }) => {
    return (
        <div className='container'>
            <div className='detail'>
                <img className='detail_img' src={data.image} alt="" />
                <div className='content'>
                    <h1>{data.title}</h1>
                    <p>DETALLE DEL PRODUCTO: {data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;