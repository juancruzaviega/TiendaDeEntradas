
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    < >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={"Bienvenido!"} />
          } />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greetings={"Bienvenido!"} />
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ >
  );
}

export default App;
