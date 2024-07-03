import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return(
        <>
            <Card className='card'> 
                <Card.Img variant="top" src={producto.imagen} alt='imagen del producto' />
                    <Card.Title>{producto.titulo}</Card.Title>
                    <Card.Text>Precio: U$D{producto.precio}</Card.Text>
                    <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Mas</Link>
            </Card>
        </>
    )   
}

export default Item