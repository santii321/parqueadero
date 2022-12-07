import { useState } from 'react'
function Home(){
  const [value, onChange] = useState(new Date().toLocaleString());
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
          <input type="text" class="form-control" placeholder="Placa" />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">FECHA  Y HORA DE INGRESO</span>
          <input value={value} onChange={(e)=>onChange(e.target.value)} type="data" class="form-control" disabled />
        </div>
        <div class="input-group flex-nowrap">
          <button class=" btn botonIngresar">INGRESAR</button>
        </div>
      </div>
    </div>

  )

};

export default Home;