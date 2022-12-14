import {useState } from "react";

const url= 'http://localhost:3100/clientes';


function TablaClientes () {
  const [clientes, setClientes] = useState([]);
  

  function getClientes() {
    fetch(url)
     .then(res => res.json())
     .then(res => setClientes(res))
  }

  getClientes()
    return(
        <div class="bd-example">
        <table class="table table-dark table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
              <th scope="col">Correo</th>
              <th scope="col">Dirección</th>
              <th scope="col">Telefono</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <th>{cliente.id}</th>
                <th>{cliente.nombre}</th>
                <th>{cliente.documento}</th>
                <th>{cliente.correo}</th>
                <th>{cliente.direccion}</th>
                <th>{cliente.telefono}</th>
                
                <th> </th>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    )
}

export default TablaClientes;