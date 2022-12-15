
import MensualidadClientes from "../../clientes/MensualidadClientes.js"
import '../../assets/style/clientes.css'
import TestimoniosClientes from "../../clientes/TestimoniosClientes.js";



function NuevoCliente() {
    return(
         <section className="d-block w-100">

          
          <MensualidadClientes />
          <TestimoniosClientes />
                    
        

        </section>
        
    )
}
export default  NuevoCliente;