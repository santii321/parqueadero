import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faExclamationCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { async } from 'q';


function Home() {
  const [value, onChange] = useState(new Date().toLocaleString());
  const [placa, setPlaca] = useState([])
  const [placas, setPlacas] = useState('')


  useEffect(() => {
    getPlaca()
  });

  const getPlaca = async () => {
    const response = await axios.get('http://localhost:3100/placas')
    setPlaca(response.data)
  }

  const postData = async (e) => {
    const validar = /(\w{3,3})+(?:[\W|_]{0,1})+((\d{3,3})|(\d{2,2})+(\w{1,1}))/ig;
    if (placas === '') {
      alert("todos los campos son obligatorios")
      return
    } else {
      if (validar.test(placas)) {
        axios.post(`http://localhost:3100/placas`, {
          placa: placas,
        })
          .then((res) => {
            setPlacas('');
          })
      } else {
        alert("Por favor ingrese una placa Valida")
        setPlacas('');
        return

      }
    }


  }
  const putData = async (id) => {
    axios.put('http://localhost:3100/placas/' + id, {
      estado: "1",
      fecha_salida: new Date()
    })
  }
  const deleteData = async (id) => {
    axios.delete('http://localhost:3100/placas/' + id, {
    })
  }


  return (
    <section className="row g-6 mb-6">
      <section className="col-xl-3 col-sm-6 col-12">
        <section className="card">
          <section className="card-body">
            <section className="row">
              <section className="col"><span className="h6 font-semibold text-muted text-sm d-block mb-2">Usuarios</span> <span className="h3 font-bold mb-0">0</span></section>
              <section className="col-auto">
                <section className="icon icon-shape bg-tertiary text-white text-lg rounded-circle"><i className="bi bi-credit-card"></i></section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="col-xl-3 col-sm-6 col-12">
        <section className="card">
          <section className="card-body">
            <section className="row">
              <section className="col"><span className="h6 font-semibold text-muted text-sm d-block mb-2">Motos</span> <span className="h3 font-bold mb-0">0</span></section>
              <section className="col-auto">
                <section className="icon icon-shape bg-primary text-white text-lg rounded-circle"><i className="bi bi-people"></i></section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="col-xl-3 col-sm-6 col-12">
        <section className="card">
          <section className="card-body">
            <section className="row">
              <section className="col"><span className="h6 font-semibold text-muted text-sm d-block mb-2">Valor Hora</span> <span className="h3 font-bold mb-0">$1.400</span></section>
              <section className="col-auto">
                <section className="icon icon-shape bg-info text-white text-lg rounded-circle"><i className="bi bi-clock-history"></i></section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="col-xl-3 col-sm-6 col-12">
        <section className="card">
          <section className="card-body">
            <section className="row">
              <section className="col"><span className="h6 font-semibold text-muted text-sm d-block mb-2">Valor Día</span> <span className="h3 font-bold mb-0">$5.000</span></section>
              <section className="col-auto">
                <section className="icon icon-shape bg-warning text-white text-lg rounded-circle"><i className="bi bi-minecart-loaded"></i></section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="contenido-placa">
        <section className="input-group flex-nowrap">

          <span className="input-group-text" id="addon-wrapping">INGRESE PLACA</span>
          <input value={placas} onChange={(e) => setPlacas(e.target.value)} className="form-control" placeholder="Placa" />
        </section>
        <section className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">FECHA  Y HORA DE INGRESO</span>
          <input value={value} onChange={(e) => onChange(e.target.value)} type="data" className="form-control" disabled />
        </section>
        <section className="input-group flex-nowrap">
          <button onClick={postData} className=" btns botonIngresar">INGRESAR</button>
        </section>
      </section>
      <section className="bd-example">
        <table className="table table-dark table-borderless">
          <thead>
            <tr>
              <th scope="col">Placa</th>
              <th scope="col">Hora de ingreso</th>
              <th scope="col">Estado</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {placa.map(placas => (
              <tr key={placas.id}>
                <th>{placas.placa}</th>
                <th>{placas.fecha_ingreso}</th>
                <th>{placas.estado === "1" && <p>{placas.fecha_salida}</p>}{placas.estado === "0" && <button onClick={() => putData(placas.id)} className="fin" ><FontAwesomeIcon className='color-icon' icon={faExclamationCircle} /> Terminar parqueo</button>}</th>
                <th><button onClick={() => deleteData(placas.id)} className="eliminar"  ><FontAwesomeIcon icon={faTrash} /> Eliminar</button></th>

              </tr>

            ))}


          </tbody>

        </table>
      </section>
    </section>


  )

};

export default Home;