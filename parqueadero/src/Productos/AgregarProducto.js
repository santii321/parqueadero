const AgregarProducto = () =>{
    return(
        <form className='w-50 d-flex flex-column section-agregar__form'>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">IMAGEN</span>
                <input class="form-control"  value=""/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">NOMBRE</span>
                <input class="form-control" value=""/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">DESCRIPCION</span>
                <input class="form-control" value=""/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">PRECIO</span>
                <input class="form-control" value=""/>
            </section>
            <section class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">CANTIDAD</span>
                <input class="form-control" value=""/>
            </section>
            <button className='btns btn-almacenar'>Agregar Producto</button>
        </form>
        
    )
}

export default AgregarProducto;