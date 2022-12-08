import FormularioClientes from "../clientes/FormularioClientes"
import MensualidadClientes from "../clientes/MensualidadClientes"
import '../assets/style/clientes.css'

function NuevoCliente() {
    return(
         <section className="d-block">

          <><FormularioClientes /><MensualidadClientes /></>

        </section>
        
    )
}
export default  NuevoCliente;