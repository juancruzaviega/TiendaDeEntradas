
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CartProvider from './context/CartContext';


const App = () => {
  return (
    < >
      <BrowserRouter>
        <CartProvider >
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings={"Bienvenido!"} />
            } />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greetings={"Bienvenido!"} />
            } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ >
  );
}

export default App;
