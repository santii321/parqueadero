import '../../assets/style/productos/agregarProducto.css';
import AgregarProducto from "../../Productos/AgregarProducto.js";

function AgregarProductos() {
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