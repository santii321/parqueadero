import "../../assets/style/productos/productos.css";
import { Link } from "react-router-dom";
import Card from "../../components/Productos/Card";
function Productos() {
  return (
    <section className="w-100 section-productos">
      <section className="d-flex section-btns">
        <Link className="btn btn-agregar" to="/AgregarProductos">
          AGREGAR
        </Link>
      </section>

      <section className="w-100 d-flex ">
        <Card />
      </section>
    </section>
  );
}
export default Productos;
