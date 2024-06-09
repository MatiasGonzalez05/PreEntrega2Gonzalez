import Item from "../Item/Item";
import "./ItemList.css";
import { toCapital } from "../../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {
    return (
        <div > {/* hacer un container para el listado que sea el mismo que el de itemlistcontainer*/}
            <h2 className="container" >{toCapital(titulo)}</h2>
            <div className="menu-productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList