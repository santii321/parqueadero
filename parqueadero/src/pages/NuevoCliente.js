import FormularioClientes from "../components/clientes/FormularioClientes.js"
import MensualidadClientes from "../components/clientes/MensualidadClientes.js"
import '../assets/style/clientes.css'
import TestimoniosClientes from "../components/clientes/TestimoniosClientes.js";
import TablaClientes from "../components/clientes/TablaClientes.js";


function NuevoCliente() {
    return(
         <section className="d-block w-100">

          
          <MensualidadClientes />
          <TestimoniosClientes />
          <FormularioClientes />
          <TablaClientes />
                    
        

        </section>
        
    )
}
export default  NuevoCliente;