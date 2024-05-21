import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListConteiner';

function App() {

    return(
        <div>
            <NavBar />
            <ItemListContainer greeting={'¡Bienvenido a la Tienda Apple!'}/>
        </div>
    )
}

export default App
