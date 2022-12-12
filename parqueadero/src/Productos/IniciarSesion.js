import { useState } from 'react';
import '../assets/style/login/login.css'
import { useNavigate } from 'react-router-dom';


const IniciarSesion = () =>{
    const [credential, setCredentials] = useState({ usuario: '', contrasena: ''});
    const navigate = useNavigate();

    const inputChange = (e) =>{
        const {name, value} = e.target
        setCredentials({
            ...credential,[name]: value
        })
    }

    const cargarSesion = (e) =>{
        e.preventDefault();
        navigate('/AgregarProductos')
    }

    return (
        <form className='w-100 d-flex flex-column section-login__form' onSubmit={cargarSesion}>
            <section class="input-group">
                <input class="form-control" type='text' required placeholder="Usuario" name='usuario' value={credential.usuario} onChange={inputChange}/>
            </section>
            <section class="input-group">
                <input class="form-control" type='password' required placeholder='contraseña' name='contrasena' value={credential.contrasena} onChange={inputChange}/>
            </section>
            <button className='btns btn-login' type='submit'>INICIAR SESION</button>
        </form>
    )
}

export default IniciarSesion;