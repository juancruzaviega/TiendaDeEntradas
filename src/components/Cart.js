import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const order = {
        buyer: {
            name: 'John',
            email: 'john@gmail.com',
            phone: '1234561234',
            adress: 'cuba'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>Aún no hay nada en el carrito</p>
                <Link to='/'>Comprar algo</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra</button>
        </>
    )
}

export default Cart