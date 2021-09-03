import React from 'react';

let Estudiante = {
    nombre: "maria",
    edad:23
}

const NuevoElemento = (props) => (
    <div className="contendeor">
        <h2>Estudiante</h2>
        <h3>{props.nombre}</h3>
        <p>Edad: {Estudiante.edad}</p>
    </div>
)



export default NuevoElemento;
