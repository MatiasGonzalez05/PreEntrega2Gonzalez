import React from 'react';
import Card from 'react-bootstrap/Card';
import "./item.css";
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return(
        <>
            <Card className='cardp'> {/* producto  */}
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.titulo}</Card.Title>
                    <Card.Text>Precio: U$D{producto.precio}</Card.Text>
                    <Card.Text>{producto.categoria}</Card.Text>
                    <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Mas</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item