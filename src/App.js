
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {
  return (
    < >
      <NavBar />
      <ItemListContainer greetings={"Bienvenido!"} />
      <ItemDetailContainer />

    </ >
  );
}

export default App;
