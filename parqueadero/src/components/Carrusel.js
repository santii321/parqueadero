import '../assets/style/carrusel.css'

const Carrusel = () =>{
    return(
        <section className='w-100 vistaCarrusel'>
            <h1 className='w-100 text-center'>Bienvenido a motos chamo</h1>
            <section className='contenedorCarrusel'>
                <section className="containerTarjetas">
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="spa"><h3>spa de motos</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="parqueadero"><h3>parqueadero</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="mantenimiento"><h3>mantenimiento</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="cascos"><h3>guarda cascos</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="aceite"><h3>cambio de aceite</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="credito"><h3>financiacion</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="tecno"><h3>tecnomecanica</h3></section>
                    <section className="tarjeta d-flex justify-content-center align-items-center" id="instalaciones"><h3>nuestras instalaciones</h3></section>
                </section>
            </section>
        </section>
    
    )
}

export default Carrusel;