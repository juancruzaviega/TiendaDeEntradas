import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import db from '../firebase/config';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const [user, setUser] = useState({
        name: '',
        phone: null,
        email: ''
    })

    const handleOrder = async (e) => {
        const date = new Date()
        e.preventDefault()
        await addDoc(collection(db, 'orders'), { user, cart, date, })
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
            <form onSubmit={handleOrder}>
                <label>Nombre</label>
                <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <label>Telefono</label>
                <input type="number" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                <label>Email</label>
                <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <button>Emitir compra</button>
            </form>

        </>
    )
}

export default Cart