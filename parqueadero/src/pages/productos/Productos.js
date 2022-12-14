import "../../assets/style/productos/productos.css";
import "../../assets/style/productos/editarProducto.css";
import { Link } from "react-router-dom";
import Card from "../../Productos/Card";
function Productos() {
  return (
    <section className="w-100 section-productos">
      <section className="d-flex section-btns">
        <Link className="btn btn-agregar" to="/AgregarProductos">
          AGREGAR
        </Link>
        <Link className="btn btn-modificar" to="/EditarEliminar">
          MODOFICAR
        </Link>
      </section>
      
      <section className="w-100 d-flex justify-content-between">
        <Card />
      </section>
    </section>
  );
}
export default Productos;
