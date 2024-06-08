import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/cartwidget';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ handleCategoria }) => {
    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria);
    }

    return(
        <>
            <div>
                <Navbar expand="lg" className="bg-fondo p-3">
                    <Container>
                    <i className="bi bi-apple fs-1 me-4 mb-2 "></i>
                        <Link to="/" className='fs-4'>APPLE STORE</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-4 fs-5 d-flex ">
                            <Link to="/" >Home</Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                {/* <li><Link to="/productos/Todos" >Todos</Link></li> */}
                                <li><Link to="/productos/celulares" >Celulares</Link></li>
                                <li><Link to="/productos/ipad" >Ipads</Link></li>  {/* cambiar las categorias del json para que quede con mis productos apple */}
                                <li><Link to="/productos/macbook" >MacBooks</Link></li>
                                <li><Link to="/productos/watch" >Relojes</Link></li>
                                <li><Link to="/productos/vision-pro" >Vision Pro</Link></li>
                            </NavDropdown>
                            <Link to="/contacto">Contacto</Link> {/* agregar clases para el nav css */}
                        </Nav>
                        
                        <CartWidget />
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>
            </div>
            
        </>
    )
}

export default NavBar