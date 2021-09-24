import React,{Component} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Formulario extends Component{
    constructor(props){
        super(props)
        }
    
render(){
    return(
        <div id="elemento">
        <h1>Formulario</h1>
        <form action="">
            <label htmlFor="">Nombre</label><br/>
            <input type="text" name="nombre"/><br/>
            <label htmlFor="">Apellido</label><br/>
            <input type="text" name="apellido" /><br/>
            <input type="submit" value="enviar"/><br/>
        </form>
        </div>
        )
    }
}    

export default Formulario;