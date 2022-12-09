import '../assets/style/agregarProducto.css'
import AgregarProducto from "../Productos/AgregarProducto.js"
import { useState } from 'react';
import axios from 'axios';

function AgregarProductos() {
    const [value, onChange] = useState()



    return(
        <>
            <section className='w-100 d-flex  justify-content-center flex-wrap section-agregar'>
            <h1 className='w-100 text-center'>Agregar producto al inventario</h1>
                <AgregarProducto />
            </section>
        </>
    )
}
export default  AgregarProductos