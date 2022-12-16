import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const url ='http://localhost:3100/clientes/';

function EditarCliente(){

    const[nombre, setNombre]=useState('');
    const[documento, setDocumento]=useState('');
    const[correo, setCorreo]=useState('');
    const[direccion, setDireccion]=useState('');
    const[telefono, setTelefono]=useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const expresionRegular = {
        usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{9,10}$/,
        celular: /^\d{10}$/
    };

    const updateCliente = async (e) =>{
        e.preventDefault();
        await axios.put(url + id,{
            nombre,
            documento,
            correo,
            direccion,
            telefono
        })
        navigate('/FormularioClientes');
    }

    const getClienteId = async () =>{
        const res = await axios.get(url + id);
        setNombre(res.data.nombre);
        setDocumento(res.data.documento);
        setCorreo(res.data.correo);
        setDireccion(res.data.direccion);
        setTelefono(res.data.telefono); 
    }

    useEffect(() => {
        getClienteId();
    }, []);

    return (
        <section className="w-100 ">
            <section className="d-flex section-btns">
                <Link className="btn btn-agregar" to="/NuevoCliente">
                regresar
                </Link>
            </section>
            <section className='w-100 d-flex  justify-content-center flex-wrap'>
            <form className="contact w-50 d-flex flex-column" id="contact" onSubmit={updateCliente} >
                <h3 className="text-center text-uppercase">Editar Cliente</h3>
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
                <button className="my-3 fw-semibold btns" type="submit" id="contact-submit" onClick="/FormularioClientes" data-submit="...Sending">Agregar Cambio</button>

            </form>

            </section>
            
            
        </section>
    )

}

export default EditarCliente;

