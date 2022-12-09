import '../assets/style/clientes.css'

const FormularioClientes = () => {
    return (
        <section className="contenedor m-2 mx-3 mt-5">
            <form className="contact w-50 d-flex flex-column" id="contact" action="" method="post">
                <h3 className="text-center">Nuevo Cliente</h3>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>NOMBRE</span>
                    <input type="text" tabindex="1" value="" required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>DOCUMENTO</span>
                    <input type="text" tabindex="2" value="" required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>CORREO</span>
                    <input type="text" tabindex="3" value="" required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>DIRECCIÓN</span>
                    <input type="text" tabindex="4" value="" required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>TELEFONO</span>
                    <input type="text" tabindex="5" value="" required autofocus />
                </fieldset>
                <fieldset className='input-group flex-nowrap'>
                    <span className='input-group-text' id='addon-wrapping'>DESCRIPCIÓN</span>
                    <textarea tabindex="6" required></textarea>
                </fieldset>

                <button className="my-3 fw-semibold btns" type="submit" id="contact-submit" data-submit="...Sending">Guardar</button>

            </form>
        </section>
            

        

       
    )
}

export default FormularioClientes;