import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'




class DatosApi extends Component {

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
        axios.get('https://my-json-server.typicode.com/TCarlosDS/ReactApp/Personajes')
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
            {posts.map((u) => (
              <div>
              <div class="card" >
              <div class="card-body ">
              <table className="table">
                  <tr>
                  <td class="w-50 h-25">
                      <p className="">Nombre: {u.nombre}</p>
                      <p className="">Edad: {u.edad}</p>
                      <p className="">Genero: {u.genero}</p>
                      <p className="">Genero: {u.id}</p>
                      <p><Link to={`/estudiantes/${u.id}`}>Detalle</Link></p>
                  </td>
                  <td class="">
                                  <img class="w-50 h-25 rounded float-end" src={u.img} />
          
                  </td>
                  
                  </tr>
                  </table>

                      </div>    
              </div>
              <br/>
              </div>
            ))}
          </>
        );
    }
    
}


export default DatosApi;