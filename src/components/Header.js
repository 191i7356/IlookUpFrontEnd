import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant = "dark" expand = "lg">
        <Navbar.Brand href="#home">I Look Up</Navbar.Brand> 
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id= "basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#profile">Profile </Nav.Link>  
    <Nav.Link href="#notifications">Notifications</Nav.Link>
    <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav>

</Navbar.Collapse>


        </Navbar>

    );
};

export default Header;