
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/cartwidget';
import './navbar.css';
import { Link } from 'react-router-dom';
import BannerHeader from '../BannerHeader/BannerHeader';
import Slider from '../Slider/Slider';

const NavBar = () => {

    return(
        <>
            <div>
                <Navbar expand="lg" className="bg-fondo p-3">
                    <i className="bi bi-apple fs-1 me-4 mb-2 "></i>
                        <Link to="/" className='fs-4 text-nav color-text'>APPLE STORE</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" nav-contaner ms-auto me-4 fs-5 d-flex">
                            <Link className="text-nav color-text" to="/" >Home</Link>
                            <NavDropdown className="text-nav color-text" title="Productos" id="basic-nav-dropdown">
                                <li><Link className="text-nav color-text" to="/productos/celulares" >Celulares</Link></li> <hr />
                                <li><Link className="text-nav color-text" to="/productos/ipad" >Ipads</Link></li>  <hr />
                                <li><Link className="text-nav color-text" to="/productos/macbook" >MacBooks</Link></li> <hr />
                                <li><Link className="text-nav color-text" to="/productos/watch" >Relojes</Link></li> <hr />
                                <li><Link className="text-nav color-text" to="/productos/vision-pro" >Vision Pro</Link></li>
                            </NavDropdown>
                            <Link className="text-nav color-text" to="/contacto">Contacto</Link> 
                        </Nav>
                        <CartWidget className="nav-contaner" />
                        </Navbar.Collapse>
                </Navbar>
                <BannerHeader />
                <Slider />
            </div>
        </>
    )
}

export default NavBar