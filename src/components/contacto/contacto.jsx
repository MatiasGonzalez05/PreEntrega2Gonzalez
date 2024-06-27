
const Contacto = () => {
    return(
        <div>
            <form>
                <input type="text"  placeholder="Ingresa tu Nombre" />
                <input type="email"  placeholder="Ingresa tu correo" />
                <input type="phone"  placeholder="Ingresa tu numero de telefono" />
                <a type="submit" className="">Enviar</a>
            </form>
        </div>
    )
}

export default Contacto