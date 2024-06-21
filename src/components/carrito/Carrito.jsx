import { useContext } from "react";
import CartContext from "../../context/CartContext";


const Carrito = () => {
    
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <>
            <h1 className="container">Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="container-carrito carrito-producto">
                        <img src={prod.imagen} alt=""  className="img-carrito"/>
                        <div className="detalle-carrito">
                            <h4>{prod.titulo}</h4>
                            <p>Precio Unitario: U$D {prod.precio}</p>
                            <p>Precio Total: U$D {prod.precio * prod.cantidad}</p>
                            <p>Cantida: {prod.cantidad}</p>
                        </div>
                    </div>
                    
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2 className="container">Precio Total: U$D {precioTotal().toFixed(2)}</h2>  
                    <a onClick={handleVaciar} className="ver-mas-carrito">Vaciar Carrito</a>
                </> :
                <h2 className="container">El carrito esta vacio... </h2>
            }
       </> 
    )
}

export default Carrito;