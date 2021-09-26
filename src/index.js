import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/Routes/App';
import reportWebVitals from './reportWebVitals';
import Estudiante from './components/Molecules/Contenedor';
import NavBar from './components/Organisms/NavBar';
import Footer from './components/Organisms/Footer';
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
*//*
ReactDOM.render(
  <React.StrictMode>
    <Estudiante/>
  </React.StrictMode>,
  document.getElementById('root')
  
);
*/
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
  </React.StrictMode>,
  document.getElementById('NavBar')
);
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
  
);
ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('Footer')
  
);

reportWebVitals();
