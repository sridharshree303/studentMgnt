import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import '../App.css';

const HeaderBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" id="Navbar" variant="dark">
          <Container fluid id="containerpad">
            <Navbar.Brand  href="/"><h1 className='display-6 font-weight-bold '>Student MGNT</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <div className='p-2 m-auto'>
            
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default HeaderBar
