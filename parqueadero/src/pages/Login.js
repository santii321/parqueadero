// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import IniciarSesion from "../Productos/IniciarSesion"

function Login(){
    return(
        <section className="w-100 d-flex justify-content-center">
            <section className='w-50 p-3 d-flex  justify-content-center flex-wrap section-login'>
                <h1 className='w-100 text-center'>Bienvenido a motos chamo</h1>
                <h2 className='w-100 text-center'>Inicie Sesion</h2>
                <IniciarSesion />
            </section>
        </section>
    )
}

export default Login