const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar}) => {

    return(
        <div>
            <div className="item-count">
                <button className="btn-restar" onClick={handleRestar}>-</button>
                <p className="numero-cantidad">{cantidad}</p>
                <button className="btn-sumar" onClick={handleSumar}>+</button>
            </div>
            
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount