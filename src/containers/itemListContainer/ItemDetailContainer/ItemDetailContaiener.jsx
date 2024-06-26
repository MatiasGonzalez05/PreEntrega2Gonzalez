import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../../helpers/asynckmock";
import ItemDetail from "../../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer