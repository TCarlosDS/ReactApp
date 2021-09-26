
import '../../assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from '../Molecules/Contenedor';
import Formulario from '../Pages/Formulario';
import EstudianteDetalle from '../Pages/EstudianteDetalle';
import DatosApi from '../Pages/DatosApi';

const App = () => (
  <Router>
    <Switch>
    <Route path="/" exact component={ Contenedor } />
    <Route path="/estudiantes" exact component={ Contenedor } />
    <Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
    <Route path="/contacto" exact  component={ Formulario } />
    <Route path="/DatosApi" exact  component={ DatosApi } />
    <Route component={ ()=>(
      <h1>Pagina no encontrada</h1>
    ) } />
    </Switch>
  </Router>
)

/*function App() {
  
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
