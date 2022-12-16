import motoLavado from "../../assets/images/iconlavado.png";
import aceite from "../../assets/images/iconoil.png";
import bateria from "../../assets/images/iconbateria.png";
import llave from "../../assets/images/iconllave.png";
import dinero from "../../assets/images/iconpila.png";
import casco from "../../assets/images/iconcasco.png";

const ServiciosClientes = () => {
    return (
        <section class="sectionServicios center-layout--sm pb-6 pb-md-8 mx-auto full-width mt-5">
            <section class="container mt-5 ">

                <section class="contenedorServicios row row-cols-1 row-cols-sm-2 row-cols-md-3">

                    <section class="col-lg-4  d-flex flex-column justify-content-star align-items-center">
                        <img src={motoLavado} alt="" class="bd-placeholder-img rounded-circle" width="75"
                            height="50" />
                        <h4 class="fw-normal text-white">Lavado de moto</h4>
                        <p class="text-center text-white"> Lavado y alistamiento, alto cilindraje $ 15 000 full, sencillo  $10 000, productos Meguiars.</p>
                    </section>


                    <section class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                    <img src={bateria} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Peritaje</h4>
                        <p class="text-center text-white">Se realiza alineación y desfases del chasis, escaneo del motor y se mide espesor de pintura.</p>
                    </section>

                    <section class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={casco} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" I />
                        <h4 class="fw-normal text-white">Guardado de casco </h4>
                        <p class="text-center text-white">Se presta el servicio de guardado de cascos, en casilleros con el número de placa del vehículo</p>

                    </section>

                    <section class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={llave} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Mantenimiento</h4>
                        <p class="text-center text-white">Servicio técnico especializado en marcas BMW, DUCATI, KTM, HD, YAMAHA, SUZUKI, HONDA, KAWASAKI.</p>
                    </section>

                    <section class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={dinero} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Financiamiento</h4>
                        <p class="text-center text-white"> Financiación de la compra de nuestros equipos a través del sistema financiero y
                            en especial una estrategia de renting tecnológico. </p>
                    </section>

                    <section class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                    <img src={aceite} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Cambio de aceite</h4>
                        <p class="text-center text-white"> Este proceso permite que todos los engranajes de la moto funcionen correctamente.
                            Además, permite limpiar el motor y lo protege de la corrosión. </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ServiciosClientes;