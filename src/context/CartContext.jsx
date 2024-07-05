import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
export default CartContext;

let carritoInicial;

try {
    const storedCarrito = localStorage.getItem("carrito");
    carritoInicial = storedCarrito ? JSON.parse(storedCarrito) : [];
} catch (error) {
    console.error("No se han encontrado productos", error);
    carritoInicial = [];
}

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };
    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id));
      };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    );
};
