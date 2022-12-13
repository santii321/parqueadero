import "../../assets/style/productos/productos.css";
import "../../assets/style/productos/editarProducto.css";
import { Link } from "react-router-dom";
import Card from "../../Productos/Card";
function Productos() {
  return (
    <section className="section-productos">
      <Link className="btn btn-agregar" to="/AgregarProductos">
        AGREGAR
      </Link>
      <Link className="btn btn-modificar" to="/EditarEliminar">
        MODOFICAR
      </Link>

      <Card />
    </section>
  );
}
export default Productos;
