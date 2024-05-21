import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../cardwidget/cardwidget';
import './navbar.css';

const NavBar = () => {
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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Ipads
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">MacBooks</NavDropdown.Item>
                            <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        
                        <CardWidget />
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>
            </div>
            
        </>
    )
}

export default NavBar