import './itemListContainer.css';
import { pedirDatos } from '../../helpers/asynckmock';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(categoria){
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
                
            })
    },[categoria])

    return(
        <>
            <ItemList className="container" productos={productos} titulo={titulo} />
        </>
    )
}

export default ItemListContainer