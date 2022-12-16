
import MensualidadClientes from '../../components/clientes/MensualidadClientes.js';
import '../../assets/style/clientes.css'
import TestimoniosClientes from "../../components/clientes/TestimoniosClientes.js";
import ServiciosClientes from '../../components/clientes/ServiciosClientes.js';
import JumboSection from '../../components/clientes/JumboSection.js';



function NuevoCliente() {
    return(
         <section className="d-flex flex-column w-100 sectionClientes">

        <TestimoniosClientes />
        <JumboSection />
        <ServiciosClientes />
        <MensualidadClientes />
        
        
        </section>
        
    )
}
export default  NuevoCliente;