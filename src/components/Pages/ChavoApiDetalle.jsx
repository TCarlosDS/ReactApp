import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'



class ChavoApiDetalle extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }


    }

    /*
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/photos', {method: 'get'})
        .then(response => response.json())
        .then(dataResponse => {
            this.setState({
                posts: dataResponse
            })
        })
    }
    */

    componentDidMount(){
        
        let paths = window.location.pathname.split('/');
        let id = paths[paths.length-1];
        axios.get(`https://my-json-server.typicode.com/TCarlosDS/ReactApp/Personajes/${id}`)
        .then(resp => {
            this.setState({
                posts: resp.data              
            })
        })
    }

    render(){

    
        const {posts} = this.state

        return (
            <>
           <div>
                <div class="card" >
                <div class="card-body ">
                <table className="table">
                    <tr>
                    <td class="w-50 h-25">
                        <p className="">Nombre: {posts.nombre}</p>
                        <p className="">Edad: {posts.edad}</p>
                        <p className="">Genero: {posts.genero}</p>
                    </td>
                    <td class="">
                                    <img class="w-50 h-25 rounded float-end" src={posts.img} />
            
                    </td>
                    
                    </tr>
                    </table>
                    
                        </div>    
                </div>
                <br/>
                </div>  
                <a href={`/ChavoApi`}>Ver todos</a>       
                </>    
        );

    
}
}


export default ChavoApiDetalle;