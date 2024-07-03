import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/client'
import { Link } from "react-router-dom";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return(
            <div className="container">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId} </p>
                <Link to="/" className="btn-seguir-comprando"><h5>Seguir Comprando</h5></Link>
            </div>
        )
    }

    return (
        <div>
            <h2 className="container">Finalzar Compra</h2>
            <form className="form" onSubmit={handleSubmit(comprar)}>
                <input type="text"  placeholder="Ingresa tu Nombre" className="card-form" {...register("nombre")}/>
                <input type="email"  placeholder="Ingresa tu correo" className="card-form" {...register("email")}/>
                <input type="phone"  placeholder="Ingresa tu numero de telefono" className="card-form" {...register("telefono")}/>
                <button type="submit" className="ver-mas-form">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout