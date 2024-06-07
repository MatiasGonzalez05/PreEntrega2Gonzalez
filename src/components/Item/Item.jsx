import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./item.css";

const Item = ({ producto }) => {
    return(
        <>
            <Card className="producto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.titulo}</Card.Title>
                    <Card.Text>Precio: U$D{producto.precio}</Card.Text>
                    <Card.Text>{producto.categoria}</Card.Text>
                    <Button variant="primary"><a href={`/item/${producto.id}`}>Go somewhere</a></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item