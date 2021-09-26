import React from 'react';
const estudiantes = [
    {
        "id": 1,
        "nombre": "El Chavo del 8",
        "edad" : 54,
        "genero": "M",
        "img": "https://media.ambito.com/p/741f20dc9817806393ae0978502147cd/adjuntos/239/imagenes/038/463/0038463861/1200x900/smart/chavo-del-8.jpg"
    },
    {
        "id": 2,
        "nombre": "Quico",
        "edad" : 48,
        "genero": "M",
        "img": "https://files.rcnradio.com/public/styles/image_834x569/public/2018-06/Quico.jpg?itok=S6aWFHi6"
    },
    {   
        "id": 3,
        "nombre": "La Chilindrina",
        "edad" : 48,
        "genero": "F",
        "img": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ODRFGOIOGZHQFPSBAKS6HB2MJA.jpg"
    },
    {   
        "id": 4,
        "nombre": "Don Ramón",
        "edad" : 67,
        "genero": "M",
        "img": "https://depor.com/resizer/U4FLIge_bNMDW_6ztsakRnCM0cg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZPC62WSIWBAPXPLTGGKHOU6HY4.png"
    },
    {   
        "id": 5,
        "nombre": "Doña Florinda",
        "edad" : 54,
        "genero": "F",
        "img": "https://static.independent.co.uk/2021/03/30/13/newFile-7.jpg?width=982&height=726&auto=webp&quality=75"
    },
    {   
        "id": 6,
        "nombre": "La popis",
        "edad" : 54,
        "genero": "F",
        "img": "http://pm1.narvii.com/6903/d54bf9552d62247555217f5ac4b4399293cc5bf1r1-248-203v2_00.jpg"
    },
    {
        "id": 7,
        "nombre": "Doña Clotilde",
        "edad" : 62,
        "genero": "F",
        "img": "https://elcomercio.pe/resizer/r3WHpJfOosZKJOfP1g9WUP6Kpzo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HZK5AO2CCZBPJN4H4YT44IFJA4.jpg"
    },
    {
        "id": 8,
        "nombre": "Patty",
        "edad" : 30,
        "genero": "F",
        "img": "https://peru21.pe/resizer/JxbMlIh75KSEs0XjVcGYN-gU5HQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JV6457PRQVAXHLN52KSGPOZLQU.jpg"
    },
    {   
        "id": 9,
        "nombre": "Doña Nieves",
        "edad" : 51,
        "genero": "F",
        "img": "http://vignette4.wikia.nocookie.net/doblaje-fanon/images/0/02/26509523.jpg/revision/latest?cb=20150823014618&path-prefix=es"
    },
    {   
        "id": 10,
        "nombre": "El Señor Barriga",
        "edad" : 60,
        "genero": "M",
        "img": "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DGLIF75MG5AFFJV7ZE56HMCLNI.jpg"
    },
    {   
        "id": 11,
        "nombre": "El Profesor Jirafales",
        "edad" : 54,
        "genero": "M",
        "img": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/20/15926252002961.jpg"
    },
    {   
        "id": 12,
        "nombre": "Jaimito el cartero",
        "edad" : 62,
        "genero": "M",
        "img": "https://www.terra.com.mx/u/fotografias/m/2021/2/12/f850x638-14899_92388_6368.jpg"
    },
    {   
        "id": 13,
        "nombre": "Ñoño",
        "edad" : 60,
        "genero": "M",
        "img": "https://img.discogs.com/abHEm5YZ1PoGR2ZWyKO8_ml1qYI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5107355-1466225224-9014.jpeg.jpg"
    },
    {   
        "id": 14,
        "nombre": "Godínez",
        "edad" : 52,
        "genero": "M",
        "img": "https://images.clarin.com/2020/09/07/el-personaje-de-godinez-era___dP-nqI7VJ_1200x630__1.jpg"
    }
]

const EstudianteDetalle=({match})=>{
    const estudiante = estudiantes.filter(c=>c.id===parseInt(match.params.id))[0];
    return(
        <>
        {
            estudiante ? (
                <div>
                <div class="card" >
                <div class="card-body ">
                <table className="table">
                    <tr>
                    <td class="w-50 h-25">
                        <p className="">Nombre: {estudiante.nombre}</p>
                        <p className="">Edad: {estudiante.edad}</p>
                        <p className="">Genero: {estudiante.genero}</p>
                    </td>
                    <td class="">
                                    <img class="w-50 h-25 rounded float-end" src={estudiante.img} />
            
                    </td>
                    
                    </tr>
                    </table>
                        {/* ternario para validadr un promp */}
                        {/*props.nombre ? props.nombre : "no hay nombre"*/}
                        </div>    
                </div>
                <br/>
                </div>        
            ):
            <h1>El id no esta registrado</h1>
        }
        <a href={`/ChavoApi`}>Ver todos</a>
        </>
    );
    
}
export default EstudianteDetalle;