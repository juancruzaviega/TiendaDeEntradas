import personas from './data/personas.json';

const App = () => {
  return (
    <div className="App">
      <p>Hola bienvenidos a mi proyecto de venta de entradas</p>
      {
        personas.map(persona => (
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <hr/>
          </div>
          
        ))
      }
    </div>
  );
}

export default App;
