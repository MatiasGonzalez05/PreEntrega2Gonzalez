import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/cartwidget';
import './navbar.css';

const NavBar = ({ handleCategoria }) => {
    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
    }

    return(
        <>
            <div>
                <Navbar expand="lg" className="bg-fondo p-3">
                    <Container>
                    <i className="bi bi-apple fs-1 me-4 mb-2 "></i>
                        <Navbar.Brand href="#home" className='fs-4'>APPLE STORE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-4 fs-5 d-flex ">
                            <Nav.Link href="#home" onClick={() => cambiarCategoria('todos')}>Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={() => cambiarCategoria('celulares')}>Iphone</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={() => cambiarCategoria('ipad')}>Ipads</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => cambiarCategoria('macbook')}>MacBooks</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Contacto</Nav.Link>
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