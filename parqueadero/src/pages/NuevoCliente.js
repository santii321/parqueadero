import FormularioClientes from "../clientes/FormularioClientes"
import MensualidadClientes from "../clientes/MensualidadClientes"
import '../assets/style/clientes.css'
import TestimoniosClientes from "../clientes/TestimoniosClientes";

function NuevoCliente() {
    return(
         <section className="d-block w-100">

          <><TestimoniosClientes /><MensualidadClientes /><FormularioClientes /></>

        </section>
        
    )
}
export default  NuevoCliente;