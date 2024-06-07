import './itemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    },[])

    return(
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer