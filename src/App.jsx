import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/itemListContainer/ItemDetailContainer/ItemDetailContaiener';
import Contacto from './components/contacto/contacto';
import Carrito from './components/carrito/Carrito';
import { CartProvider } from './context/CartContext';

/* import Loader from './components/Loader/Loader'; */

function App() {

    return(
        <CartProvider>
          
            <BrowserRouter>
                <NavBar />
                {/* <Loader /> */}
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/productos/:categoria' element={<ItemListContainer />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/carrito' element={<Carrito />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>    
    )
}

export default App
