import Item from "../Item/Item";
import { toCapital } from "../../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {
    return (
        <div > 
            <h2 className="container" >{toCapital(titulo)}</h2>
            <div className="menu-productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList