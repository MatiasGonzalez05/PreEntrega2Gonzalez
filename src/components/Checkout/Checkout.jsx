import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/client';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const [detallePedido, setDetallePedido] = useState(null);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                setDetallePedido({ productos: carrito, total: precioTotal() }); 
                vaciarCarrito();
            });
    };

    if (pedidoId) {
        return(
            <div className="container">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId} </p>
                
                <h3>Detalles del Carrito</h3>
                {detallePedido?.productos.map((prod) => (
                    <div key={prod.id} className="carrito-producto">
                        <img src={prod.imagen} alt={prod.titulo} className="img-carrito"/>
                        <div className="detalle-carrito">
                            <h4>{prod.titulo}</h4>
                            <p>Precio Unitario: U$D {prod.precio}</p>
                            <p>Precio Total: U$D {prod.precio * prod.cantidad}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                        </div>
                    </div>
                ))}
                <h2 className="container">Precio Total: U$D {detallePedido?.total.toFixed(2)}</h2>
                
                <Link to="/" className="btn-seguir-comprando"><h5>Seguir Comprando</h5></Link>
            </div>
        );
    }

    return (
        <div>
            <h2 className="container">Finalizar Compra</h2>
            <form className="form" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu Nombre" className="card-form" {...register("nombre")} required />
                <input type="email" placeholder="Ingresa tu correo" className="card-form" {...register("email")} required />
                <input type="phone" placeholder="Ingresa tu número de teléfono" className="card-form" {...register("telefono")} required />
                <button type="submit" className="ver-mas-form">Comprar</button>
            </form>
        </div>
    );
}

export default Checkout;
