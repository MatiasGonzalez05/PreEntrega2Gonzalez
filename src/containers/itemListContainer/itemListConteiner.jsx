import Card from 'react-bootstrap/Card';
import './itemListContainer.css';
const ItemListContainer = ({ greeting }) => {
    return(
        <Card className='bg-fondo-item'>
            <Card.Body> 
                <h2>{greeting}</h2>
            </Card.Body>
        </Card>
        
    )
}

export default ItemListContainer