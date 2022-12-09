import FormularioClientes from "../clientes/FormularioClientes"
import MensualidadClientes from "../clientes/MensualidadClientes"
import '../assets/style/clientes.css'

function NuevoCliente() {
    return(
         <section className="d-block w-100">

          <><FormularioClientes /><MensualidadClientes /></>

        </section>
        
    )
}
export default  NuevoCliente;