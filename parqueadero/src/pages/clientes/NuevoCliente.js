
import MensualidadClientes from '../../components/clientes/MensualidadClientes.js';
import '../../assets/style/clientes.css'
import TestimoniosClientes from "../../components/clientes/TestimoniosClientes.js";
import ServiciosClientes from '../../components/clientes/ServiciosClientes.js';



function NuevoCliente() {
    return(
         <section className="d-block w-100">

        <TestimoniosClientes />
        <ServiciosClientes />
        <MensualidadClientes />
        
        
        </section>
        
    )
}
export default  NuevoCliente;