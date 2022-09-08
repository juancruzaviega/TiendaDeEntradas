// import personas from './data/personas.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';



const App = () => {
  return (
    <div >
      <NavBar />
      <ItemListContainer greetings={"Bienvenido!"} />

    </div >
  );
}

export default App;
