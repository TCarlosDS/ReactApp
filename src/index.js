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
    <Estudiante/>
  </React.StrictMode>,
  document.getElementById('root')
  
);
ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('Footer')
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
