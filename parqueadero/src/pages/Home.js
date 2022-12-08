import { useState, useEffect } from 'react'
import axios from 'axios';
function Home() {
  const [value, onChange] = useState(new Date().toLocaleString());
  const [placa, setPlaca] = useState([])
  const [placas, setPlacas] = useState('')
  function getPlaca() {
    fetch('http://localhost:3100/placas')
      .then(res => res.json())
      .then(res => setPlaca(res))

  }
  getPlaca()
  
  const postData = () => {
    if (placas == '') {
      alert("todos los campos son obligatorios")
    return
    } 

    axios.post(`http://localhost:3100/placas`, {
      placa: placas,
      })
      .then((res) => {
        setPlacas('');
      })

}


  return (
    <div class="row g-6 mb-6">
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">Usuarios</span> <span class="h3 font-bold mb-0">0</span></div>
              <div class="col-auto">
                <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle"><i class="bi bi-credit-card"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">Motos</span> <span class="h3 font-bold mb-0">0</span></div>
              <div class="col-auto">
                <div class="icon icon-shape bg-primary text-white text-lg rounded-circle"><i class="bi bi-people"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">Total saldo</span> <span class="h3 font-bold mb-0">$1.400</span></div>
              <div class="col-auto">
                <div class="icon icon-shape bg-info text-white text-lg rounded-circle"><i class="bi bi-clock-history"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">capacidad</span> <span class="h3 font-bold mb-0">95%</span></div>
              <div class="col-auto">
                <div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="contenido-placa">
          <div class="input-group flex-nowrap">

            <span class="input-group-text" id="addon-wrapping">INGRESE PLACA</span>
            <input value={placas} onChange={(e) => setPlacas(e.target.value)} class="form-control" placeholder="Placa" />
          </div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">FECHA  Y HORA DE INGRESO</span>
            <input value={value} onChange={(e) => onChange(e.target.value)} type="data" class="form-control" disabled />
          </div>
          <div class="input-group flex-nowrap">
            <button onClick={postData}  class=" btns botonIngresar">INGRESAR</button>
          </div>
        </div>
      <div class="bd-example">
        <table class="table table-dark table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Placa</th>
              <th scope="col">Hora de ingreso</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {placa.map(placas => (
              <tr key={placas.id}>
                <th>{placas.id}</th>
                <th>{placas.placa}</th>
                <th>{placas.fecha_ingreso}</th>
                <th> </th>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>


  )

};

export default Home;