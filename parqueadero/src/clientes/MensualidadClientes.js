import '../assets/style/clientes.css'

const MensualidadClientes = () => {
    return (
        <section className="contenedormensualidad m-2 mx-3">
            <div class="cards">
                <div className="card shadow">
                    <ul>
                        <li className="pack">Basic</li>
                        <li id="basic" className="price bottom-bar">$6.000</li>
                        <li className="bottom-bar">Vigilancia 24/7</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Red Extensa y Avanzada</li>
                        <li><button className="btn">Elegir plan</button></li>
                    </ul>
                </div>
                <div className="card active">
                    <ul>
                        <li className="pack">Mensualidad</li>
                        <li id="professional" className="price bottom-bar">$120.000</li>
                        <li className="bottom-bar">Moto Spa</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Cambio de aceite</li>
                        <li><button className="btn active-btn">Elegir plan</button></li>
                    </ul>
                </div>
                <div className="card shadow">
                    <ul>
                        <li className="pack">Anualidad</li>
                        <li id="master" className="price bottom-bar">$300.000</li>
                        <li className="bottom-bar">Renovación de SOAT</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Descuentos en accesorios</li>
                        <li><button className="btn">Elegir plan</button></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MensualidadClientes;