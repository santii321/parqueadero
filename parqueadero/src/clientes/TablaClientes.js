import {useState } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";

const url= 'http://localhost:3100/clientes/';


function TablaClientes () {
  const [clientes, setClientes] = useState([]);
  

  function getClientes() {
    fetch(url)
     .then(res => res.json())
     .then(res => setClientes(res))
  }

  const deleteClientes = async (id) =>{
     axios.delete(url + id, {
     },[])
  }

  getClientes()
    return(
        <div class="bd-example">
        <table class="table table-dark table-borderless">
          <thead>
            <tr className="">
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
              <th scope="col">Correo</th>
              <th scope="col">Dirección</th>
              <th scope="col">Telefono</th>
              <th scope="col">Acciones</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <th>{cliente.nombre}</th>
                <th>{cliente.documento}</th>
                <th>{cliente.correo}</th>
                <th>{cliente.direccion}</th>
                <th>{cliente.telefono}</th>
                <th> 
                  <Link to={`/EditarCliente/${cliente.id}`} className="btn bg-primary">Editar</Link>
                  <button className="btn bg-danger" onClick={()=>deleteClientes(cliente.id)}>ELIMINAR</button>
                </th>
                <th> </th>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    )
}

export default TablaClientes;