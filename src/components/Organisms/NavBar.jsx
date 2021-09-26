import React from 'react';



const NavBar = () => (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">React</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/estudiantes">Personajes</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/contacto">Contacto</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/DatosApi">Datos API</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/ChavoApi">Datos API Personajes</a>
            </li>
        </ul>
    
        </div>
    </div>
</nav>
)



export default NavBar;
