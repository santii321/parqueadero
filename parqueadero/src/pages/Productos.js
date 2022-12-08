import '../assets/style/productos.css'
import { Link } from "react-router-dom";
import Card from '../Productos/Card';
function Productos() {
    return (
        <section className=''>
            <Link className="btn btn-agregar" to="/AgregarProductos">
                agregar producto
            </Link>

            <Card />
        </section>
    )
}
export default Productos