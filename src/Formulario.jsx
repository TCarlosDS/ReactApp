import React,{Component} from 'react';
import { render } from 'react-dom';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre="nuevo nombre"
        }
    }
render(){
    return(
        <div>
        <h1>Formulario</h1>
        <form>
            <input type="text" name="nombre" 
            onChange={
                (i)=>this.setState({
                    nombre: i.target.value
                })
                }/>
            <input type="submit" value="Guardar" />
        </form>
        </div>
        )
    }
}
export default Formulario;