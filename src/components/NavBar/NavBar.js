import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget' 
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'


function NavBar () {
    return (
    
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand><Link to={'/'} className='link'>Tienda Nova</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'} className='link'>Home</Link></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to={'/categorias/remeras'} className="linkDrop">Remeras</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={'/categorias/pantalones'} className="linkDrop">Pantalones</Link></NavDropdown.Item>
                </NavDropdown>
            <Nav.Link><Link to={'/contacto'} className='link'>Contacto</Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} className='link'><CartWidget/></Link></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    )
}

export default NavBar 