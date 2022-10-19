import React from 'react';
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <img src="../img/carretilla.png" alt="carro" width={50} height={50} />
            <span>{totalProducts() || ''}</span>
        </>

    )
}

export default CartWidget