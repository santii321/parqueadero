
import MensualidadClientes from '../../components/clientes/MensualidadClientes.js';
import '../../assets/style/clientes.css'
import TestimoniosClientes from "../../components/clientes/TestimoniosClientes.js";



function NuevoCliente() {
    return(
         <section className="d-block w-100">

        <MensualidadClientes />
        <TestimoniosClientes />
        
        </section>
        
    )
}
export default  NuevoCliente;