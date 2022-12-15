import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const url ='http://localhost:3100/productos';


const AgregarProducto = () =>{
    const [imagen, setImagen] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const navigate = useNavigate();

    const postProducto = async (e) =>{
        e.preventDefault()
        await axios.post(url, {
            imagen,
            nombre,
            descripcion,
            precio,
            cantidad
        })
        navigate('/Productos')
    }

    return(
        <form className='w-50 d-flex flex-column section-agregar__form'  onSubmit={postProducto}>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">IMAGEN</span>
                <input class="form-control" required value={imagen} onChange={ (e) => setImagen(e.target.value)}/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">NOMBRE</span>
                <input class="form-control" required value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">DESCRIPCION</span>
                <input class="form-control" required value={descripcion} onChange={ (e) => setDescripcion(e.target.value)}/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">PRECIO</span>
                <input class="form-control" required value={precio} onChange={ (e) => setPrecio(e.target.value)}/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">CANTIDAD</span>
                <input class="form-control" required value={cantidad} onChange={ (e) => setCantidad(e.target.value)}/>
            </section>
            <button className='btns btn-almacenar' type='submit'>Agregar Producto</button>
        </form>
        
    )
}

export default AgregarProducto;