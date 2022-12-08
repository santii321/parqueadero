import { Link } from "react-router-dom";
function Productos() {
    return (
        <>
            <h1>Productos</h1>
            <Link className="btn" to="/AgregarProductos">
                producto agregar
            </Link>
        </>
    )
}
export default Productos