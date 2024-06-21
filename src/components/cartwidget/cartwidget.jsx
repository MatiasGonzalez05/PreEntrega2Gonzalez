import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return(
        <>  
            <Link className="text-nav color-text" to="/carrito" >
                <div className='me-5'>
                    <i className="bi bi-cart-fill fs-4 container-cartwidget"></i>
                    <Badge bg="secondary" className='position-absolute m-right-3'>
                    {cantidadEnCarrito()}
                    </Badge>
                </div>
            </Link>
        </>
    )
}

export default CartWidget