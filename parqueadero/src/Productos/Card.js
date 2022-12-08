import {data} from '../model/data.js'
const Card = () =>{
    return(
        <section className='w-100 d-flex  flex-wrap'>{
            data.map(producto =>(
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
                    <input className='btn-agregarCarrito' type='button' value='Agregar al carrito' />
                </section>
            ))}
            
        </section>

        
    )
}

export default Card;