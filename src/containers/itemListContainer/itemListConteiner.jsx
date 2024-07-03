import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const { categoria } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosRef = collection(db, "productos");
                const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

                const resp = await getDocs(q);
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProductos();
    }, [categoria]);

    return (
        <>
            <ItemList className="container" productos={productos} titulo={titulo} />
        </>
    );
};

export default ItemListContainer;

