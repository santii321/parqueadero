import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const url ='http://localhost:3100/productos';

const Card = () =>{
    const [productos, setproductos] = useState([]);
    useEffect(() => {
      getProductos();
    }, []);
  
    const getProductos = async () => {
      const res = await axios.get(url);
      setproductos(res.data);
    };
  
    const deleteProducto = async (id) => {
      await axios.delete(`${url}${id}`);
      getProductos();
    };
  
    return (
      <section className="w-100 d-flex flex-wrap">
        {productos.map((productos) => (
          <section className="w-25  card__producto d-flex flex-column">
              <section className="w-100 section-btns d-flex justify-content-between">
                <Link
                  to={`/EditarProductos/${productos.id}`}
                  className="btn bg-primary btn-editar "
                >
                  <Icon css="" icon={faEdit} />
                </Link>
                <button
                  className="btn bg-danger btn-eliminar"
                  onClick={() => deleteProducto(productos.id)}
                >
                  <Icon css="" icon={faTrash} />
                </button>
              </section>
            <section className="w-100 card__imagen d-flex ">
              <img
                className="card__imagen-img rounded w-100"
                src={productos.imagen}
                alt="Imagen Producto"
              />
            </section>
            <section className="w-100">
              <section className="w-100 section-conenido">
                <h3 className="">{productos.nombre}</h3>
                <p className="">{productos.descripcion}</p>
                <p className="">
                  {new Intl.NumberFormat("col").format(productos.precio)}
                </p>
              </section>
              <section className="w-100 d-flex justify-content-center">
                <button className="btn-agregarCarrito">agregar al carrito</button>
              </section>
            </section>
          </section>
        ))}
      </section>
    );
}

export default Card;