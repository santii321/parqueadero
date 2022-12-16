import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const url ='http://localhost:3100/productos/';

function EditarProductos(){
    const [imagen, setImagen] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const expresionRegular = {
        usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{9,10}$/,
        celular: /^\d{10}$/
      };

    const updateProducto = async (e) =>{
        e.preventDefault();
        await axios.put(url + id, {
            imagen,
            nombre,
            descripcion,
            precio,
            cantidad
        })
        navigate('/Productos')
    }

    useEffect( ()=>{
        getProductoById();
    }, [])

    const getProductoById = async () =>{
        const res = await axios.get(url + id)
        setImagen(res.data.imagen)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion)
        setPrecio(res.data.precio)
        setCantidad(res.data.cantidad)
    }

    return(
        <section className='w-100'>
            <section className="d-flex section-btns">
                <Link className="btn btn-agregar" to="/Productos">
                regresar
                </Link>
            </section>
            <section className='w-100 d-flex  justify-content-center flex-wrap section-agregar'>
                <h1 className='w-100 text-center'>Agregar producto al inventario</h1>
                <form className='w-50 d-flex flex-column section-agregar__form'  onSubmit={updateProducto}>
                    <section class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">IMAGEN</span>
                        <input class="form-control" value={imagen} onChange={ (e) => setImagen(e.target.value)}/>
                    </section>
                    <section class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">NOMBRE</span>
                        <input class="form-control" value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
                    </section>
                    <section class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">DESCRIPCION</span>
                        <input class="form-control" value={descripcion} onChange={ (e) => setDescripcion(e.target.value)}/>
                    </section>
                    <section class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">PRECIO</span>
                        <input class="form-control" value={precio} onChange={ (e) => setPrecio(e.target.value)}/>
                    </section>
                    <section class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">CANTIDAD</span>
                        <input class="form-control" value={cantidad} onChange={ (e) => setCantidad(e.target.value)}/>
                    </section>
                    <button className='btns btn-almacenar' type='submit'>Agregar Cambio</button>
                </form>
            </section>
        </section>

    )
}

export default EditarProductos;