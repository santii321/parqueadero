import { Link } from 'react-router-dom';
import '../../assets/style/clientes.css'


const MensualidadClientes = () => {
    return (
        <section className="contenedormensualidad m-2 mx-3 mb-5 mt-5">
             <section className="tituloourpricing my-5 mt-2">
                <h1 className="text-center text-warning text-uppercase">COSTOS</h1>
                <p className="text-center text-white fs-5">Los precios son para cualquier tipo de transporte! Elija qué servicio necesita y nuestro personal hará todo de manera cualitativa.</p>
            </section>
            <section class="cards">
                <section className="card shadow">
                    <ul className='listasMensualidad'>
                        <li className="pack fw-semibold">Basic</li>
                        <li id="basic" className="price bottom-bar">$6.000</li>
                        <li className="bottom-bar">Vigilancia 24/7</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Red Extensa y Avanzada</li>
                        <li><Link to="/FormularioClientes" className="btn">Elegir plan</Link></li>
                    </ul>
                </section>
                <section className="card active">
                    <ul className='listasMensualidad'>
                        <li className="pack fw-semibold">Mensualidad</li>
                        <li id="professional" className="price bottom-bar">$20.000</li>
                        <li className="bottom-bar">Moto Spa</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Cambio de aceite</li>
                        <li><Link to="/FormularioClientes" className="btn active-btn">Elegir plan</Link></li>
                    </ul>
                </section>
                <section className="card shadow">
                    <ul className='listasMensualidad'>
                        <li className="pack fw-semibold">Anualidad</li>
                        <li id="master" className="price bottom-bar">$110.000</li>
                        <li className="bottom-bar">Renovación de SOAT</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Descuentos en accesorios</li>
                        <li><Link to="/FormularioClientes" className="btn">Elegir plan</Link></li>
                    </ul>
                </section>
            </section>
        </section>
    )
}

export default MensualidadClientes;