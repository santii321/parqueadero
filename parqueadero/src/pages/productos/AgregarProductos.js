import { Link } from "react-router-dom";
import "../../assets/style/productos/agregarProducto.css";
import AgregarProducto from "../../components/Productos/AgregarProducto.js";

function AgregarProductos() {
  return (
    <section className="w-100">
      <section className="d-flex section-btns">
        <Link className="btn btn-agregar" to="/Productos">
          volver
        </Link>
      </section>
      <section className="w-100 d-flex  justify-content-center flex-wrap section-agregar">
        <h1 className="w-100 text-center">Agregar producto al inventario</h1>
        <AgregarProducto />
      </section>
    </section>
  );
}
export default AgregarProductos;
