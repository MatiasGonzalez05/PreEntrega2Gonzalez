import Badge from 'react-bootstrap/Badge';

const CardWidget = () => {
    return(
        <>
            <div className='me-5'>
                <i className="bi bi-cart-fill fs-4 "></i>
                <Badge bg="secondary" className='position-absolute m-right-3'>
                1
                </Badge>
            </div>   
        </>
    )
}

export default CardWidget