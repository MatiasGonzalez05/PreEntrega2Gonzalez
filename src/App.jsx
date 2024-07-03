import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/itemListContainer/ItemDetailContainer/ItemDetailContaiener';
import Carrito from './components/carrito/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {

    return(
        <CartProvider>
          
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/productos/:categoria' element={<ItemListContainer />} />
                    <Route path='/carrito' element={<Carrito />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>    
    )
}

export default App
