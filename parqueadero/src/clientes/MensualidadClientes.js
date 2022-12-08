import '../assets/style/clientes.css'

const MensualidadClientes = () => {
    return (
        <section className="contenedormensualidad m-2 mx-3">
            <div class="cards">
                <div className="card shadow">
                    <ul>
                        <li className="pack">Basic</li>
                        <li id="basic" className="price bottom-bar">&dollar;199.99</li>
                        <li className="bottom-bar">500 GB Storage</li>
                        <li className="bottom-bar">2 Users Allowed</li>
                        <li className="bottom-bar">Send up to 3 GB</li>
                        <li><button className="btn">Learn More</button></li>
                    </ul>
                </div>
                <div className="card active">
                    <ul>
                        <li className="pack">Professional</li>
                        <li id="professional" className="price bottom-bar">&dollar;249.99</li>
                        <li className="bottom-bar">1 TB Storage</li>
                        <li className="bottom-bar">5 Users Allowed</li>
                        <li className="bottom-bar">Send up to 10 GB</li>
                        <li><button className="btn active-btn">Learn More</button></li>
                    </ul>
                </div>
                <div className="card shadow">
                    <ul>
                        <li className="pack">Master</li>
                        <li id="master" className="price bottom-bar">&dollar;399.99</li>
                        <li className="bottom-bar">2 TB Storage</li>
                        <li className="bottom-bar">10 Users Allowed</li>
                        <li className="bottom-bar">Send up to 20 GB</li>
                        <li><button className="btn">Learn More</button></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MensualidadClientes;