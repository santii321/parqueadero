import '../assets/style/clientes.css'

const MensualidadClientes = () => {
    return (
        <section className="contenedormensualidad m-2 mx-3 mt-5">
             <section className="tituloourpricing my-5">
                <h1 className="text-center text-warning text-uppercase">Our Pricing</h1>
                <p className="text-center text-white">Prices are for any type of transport! Choose what service you need and our staff will do everything qualitatively.</p>
            </section>
            <div class="cards">
                <div className="card shadow">
                    <ul className='listasMensualidad'>
                        <li className="pack">Basic</li>
                        <li id="basic" className="price bottom-bar">$6.000</li>
                        <li className="bottom-bar">Vigilancia 24/7</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Red Extensa y Avanzada</li>
                        <li><button className="btn">Elegir plan</button></li>
                    </ul>
                </div>
                <div className="card active">
                    <ul className='listasMensualidad'>
                        <li className="pack">Mensualidad</li>
                        <li id="professional" className="price bottom-bar">$20.000</li>
                        <li className="bottom-bar">Moto Spa</li>
                        <li className="bottom-bar">Reserva en línea</li>
                        <li className="bottom-bar">Cambio de aceite</li>
                        <li><button className="btn active-btn">Elegir plan</button></li>
                    </ul>
                </div>
                <div className="card shadow">
                    <ul className='listasMensualidad'>
                        <li className="pack">Anualidad</li>
                        <li id="master" className="price bottom-bar">$110.000</li>
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