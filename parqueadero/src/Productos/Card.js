import { useEffect, useState } from 'react';
import axios from 'axios';

const url ='http://localhost:3100/productos';

const Card = () =>{
    const [productos, setproductos] = useState([]);
    useEffect( () =>{
        getProductos()
    }, [])


    const getProductos = async ()=>{
        const res = await axios.get(url);
        setproductos(res.data);
    }
    return(
        <section className='w-100 d-flex  flex-wrap'>{
            productos.map(producto =>(
                <section className='w-25 card card__producto d-flex aling-items-center'>
                    <section className='card__imagen d-flex '>
                        <img className='card__imagen-img rounded w-100' src={producto.imagen} alt="Imagen Producto"/>
                    </section>
                    <section>
                    <h3>
                        {producto.nombre}
                    </h3>
                    <p>
                        {producto.descripcion}
                    </p>
                    <p>
                        {producto.precio}
                    </p>
                    
                    </section>
                    <button className='btn-agregarCarrito'>agregar al carrito</button>
                </section>
                
            ))}
            
        </section>

        
    )
}

export default Card;