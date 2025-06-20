import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{maxWidth:'1600px'}}>
        <img src={require('./img/s2.png')} style={{height:'60px'}} alt=''></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mx-auto">
  <Nav.Link><Link to="/" className="fsw mx-2"><b>HOME</b></Link></Nav.Link>
  <Nav.Link><Link to="/about" className="fsw mx-2"><b>ABOUT US</b></Link></Nav.Link>
  <Nav.Link><Link to="/contact" className="fsw mx-2"><b>CONTACT US</b></Link></Nav.Link>
  <Nav.Link><Link to="/shop" className="fsw mx-2"><b>SHOP</b></Link></Nav.Link>
  <Nav.Link><Link to="/blog" className="fsw mx-2"><b>BLOG</b></Link></Nav.Link>
</Nav>

        </Navbar.Collapse>
        <FontAwesomeIcon icon={faUser} className='fs-3 mx-3' />
        <FontAwesomeIcon icon={faHeart} className='fs-3 mx-3' />
        <FontAwesomeIcon icon={faCartShopping} className='fs-3 mx-3' />
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
