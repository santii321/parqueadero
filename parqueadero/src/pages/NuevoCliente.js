import FormularioClientes from "../clientes/FormularioClientes.js"
import MensualidadClientes from "../clientes/MensualidadClientes.js"
import '../assets/style/clientes.css'
import TestimoniosClientes from "../clientes/TestimoniosClientes.js";
import TablaClientes from "../clientes/TablaClientes.js";


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