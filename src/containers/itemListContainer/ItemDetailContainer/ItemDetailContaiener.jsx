import { useEffect, useState } from "react"
import { pedirItemPorId } from "../../../helpers/pedirDatos"
import ItemDetail from "../../../components/ItemDetail/ItemDetail"


const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null)

    console.log(itemId)
    useEffect(() => {
        pedirItemPorId(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [itemId])

    return(
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer