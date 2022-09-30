import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav__brand'>
                    <NavLink className='nav__link' to='/'>Tienda Gamer</NavLink>
                </div>
                <ul className='nav__list'>
                    <li>
                        <NavLink className='nav__link' to='/categoria/accesorios'>Accesorios</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='/categoria/juegos'>Juegos</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;