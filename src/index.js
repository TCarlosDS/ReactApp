import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Estudiante from './Contenedor';
import NavBar from './NavBar';
import Footer from './Footer';
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
