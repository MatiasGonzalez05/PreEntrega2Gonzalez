import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/itemListContainer/ItemDetailContainer/ItemDetailContaiener';


function App() {
    

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/' element={<ItemDetailContainer itemId={2} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
