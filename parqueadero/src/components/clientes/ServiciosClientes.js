import motoLavado from "../../assets/images/iconlavado.png";
import aceite from "../../assets/images/iconoil.png";
import bateria from "../../assets/images/iconbateria.png";
import llave from "../../assets/images/iconllave.png";
import dinero from "../../assets/images/iconpila.png";
import casco from "../../assets/images/iconcasco.png";

const ServiciosClientes = () => {
    return (
        <section class="center-layout--sm pb-6 pb-md-8 mx-auto full-width mt-5">
            <div class="container mt-5 ">


                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

                    <div class="col-lg-4  d-flex flex-column justify-content-star align-items-center">
                        <img src={motoLavado} alt="" class="bd-placeholder-img rounded-circle" width="75"
                            height="50" />
                        <h4 class="fw-normal text-white">Lavado de moto</h4>
                        <p class="text-center text-white"> El carnero, parte de los carneros que constituían la ofrenda a Ares</p>
                    </div>


                    <div class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={aceite} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Cambio de aceite</h4>
                        <p class="text-center text-white">Toro de Creta o la forma que adoptó Zeus cuando raptó a Europa.</p>
                    </div>

                    <div class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={bateria} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Reparación de bateria</h4>
                        <p class="text-center text-white">Cambiantes como los gemelos que representan su imagen</p>
                    </div>

                    <div class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={llave} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Mantenimiento</h4>
                        <p class="text-center text-white">Cangrejo enviado para ayudar a la Hidra de Lerna cuando luchaba contra
                            Hércules</p>
                    </div>

                    <div class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={dinero} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" />
                        <h4 class="fw-normal text-white">Financiamiento</h4>
                        <p class="text-center text-white">El León de Nemea que mató Hércules</p>
                    </div>

                    <div class="col-lg-4 d-flex flex-column justify-content-star align-items-center">
                        <img src={casco} alt="" class="bd-placeholder-img rounded-circle" width="50"
                            height="50" I />
                        <h4 class="fw-normal text-white">Guardado de casco </h4>
                        <p class="text-center text-white">Se inspira en Astrea, titánide hija de Ceo y Febe</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiciosClientes;