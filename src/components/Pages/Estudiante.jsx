import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Estudiante = (props) =>(
    <div>
    <div class="card" >
    <div class="card-body ">
    <table className="table">
        <tr>
        <td class="w-50 h-25">
            <p className="">Nombre: {props.nombre}</p>
            <p className="">Edad: {props.edad}</p>
            <p className="">Genero: {props.genero}</p>
            <p className="">Genero: {props.id}</p>
            <p><Link to={`/estudiantes/${props.id}`}>Detalle</Link></p>
        </td>
        <td class="">
                        <img class="w-50 h-25 rounded float-end" src={props.img} />

        </td>
        
        </tr>
        </table>
            {/* ternario para validadr un promp */}
            {/*props.nombre ? props.nombre : "no hay nombre"*/}
            </div>    
    </div>
    <br/>
    </div>
);
Estudiante.propTypes ={
    nombre: PropTypes.string
}
Estudiante.defaultProps = {
    nombre: "no tiene nombre"
}
export default Estudiante;