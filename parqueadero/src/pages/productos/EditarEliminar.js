import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url ='http://localhost:3100/productos';

function EditarEliminar(){
    const [productos, setproductos] = useState([]);
    useEffect( () =>{
        getProductos()
    }, [])


    const getProductos = async ()=>{
        const res = await axios.get(url);
        setproductos(res.data);
    }

    const deleteProductos = async (id)=>{
        axios.delete(`${url}${id}`)
        getProductos()
    }

    return(
        <section className='w-100 d-flex  flex-wrap'>{
            productos.map(producto =>(
                <section className='w-25 py-1 card card__producto d-flex aling-items-center'>
                    <section className='card__imagen d-flex '>
                        <img className='card__imagen-img rounded w-100' src={producto.imagen} alt="Imagen Producto"/>
                    </section>
                    <section key={producto.id}>
                        <h3>
                            {producto.nombre}
                        </h3>
                        <p>
                            {producto.descripcion}
                        </p>
                        <p>
                            {producto.precio}
                        </p>
                    
                        <section className='w-100 '>
                            <Link to={`/EditarProductos/${producto.id}`} className="btn bg-primary btn-editar "><i className="fa-solid fa-pen-to-square"></i></Link>
                            <button className="btn bg-danger btn-eliminar" onClick={ ()=>deleteProductos(producto.id)}>ELIMINAR</button>
                        </section>
                    </section>
                </section>
                
            ))}
            
        </section>
    )
}

export default EditarEliminar;