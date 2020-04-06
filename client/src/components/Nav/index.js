import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

// import "./style.css";

class Nav extends Component {
    state = {
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Liz Murice Alexander</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#academic">Academic Work</Nav.Link>
                <Nav.Link href="#webdev">Web Development</Nav.Link>
                <Nav.Link href="#multimedia">MultiMedia Projects</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> 
        );
    }
}

export default Nav;