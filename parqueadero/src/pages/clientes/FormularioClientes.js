import '../../assets/style/clientes.css';
import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import TablaClientes from '../../clientes/TablaClientes';

const url= 'http://localhost:3100/clientes';

const FormularioClientes = () => {
    const[nombre, setNombre]=useState('');
    const[documento, setDocumento]=useState('');
    const[correo, setCorreo]=useState('');
    const[direccion, setDireccion]=useState('');
    const[telefono, setTelefono]=useState('');
    const navigate = useNavigate();
  

    const postCliente = async (e)=>{
        e.preventDefault()
        await axios.post(url, {
            nombre: nombre,
            documento: documento,
            correo: correo,
            direccion: direccion,
            telefono: telefono
        })
            setNombre('');
            setDocumento('');
            setCorreo('');
            setDireccion('');
            setTelefono('');
        
    }

    return (
        <section className="contenedor m-2 mx-3 mt-5">
            <Link className='btn' to="/NuevoCliente">Regresar</Link>
            <form className="contact w-50 d-flex flex-column" id="contact" onSubmit={postCliente} >
                <h3 className="text-center text-uppercase">Nuevo Cliente</h3>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>NOMBRE</span>
                    <input type="text" tabindex="1" value={nombre} onChange={(e)=> setNombre(e.target.value)} required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>DOCUMENTO</span>
                    <input type="text" tabindex="2" value={documento} onChange={(e)=> setDocumento(e.target.value)} required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>CORREO</span>
                    <input type="text" tabindex="3" value={correo} onChange={(e)=> setCorreo(e.target.value)} required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>DIRECCIÓN</span>
                    <input type="text" tabindex="4" value={direccion} onChange={(e)=> setDireccion(e.target.value)} required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>TELEFONO</span>
                    <input type="text" tabindex="5" value={telefono} onChange={(e)=> setTelefono(e.target.value)} required autofocus />
                </fieldset>
                <button className="my-3 fw-semibold btns" type="submit" id="contact-submit" data-submit="...Sending">Agregar Cliente</button>
            </form>
            <section>
            <TablaClientes />
            </section>
            
        </section>

      


       
    )
}

export default FormularioClientes;