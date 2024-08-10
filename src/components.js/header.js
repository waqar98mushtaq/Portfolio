import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faBlog, faFile, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';



export default function AppHeader() {
  return (
    <div>
      <Navbar expand="lg" className='navbar'>
        <Container>
          <Navbar.Brand className='title' href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >
            <Nav className='nav'>
              <Nav.Link as={Link} to="/" ><FontAwesomeIcon icon={faHouse}/>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" ><FontAwesomeIcon icon={faUser}/>About</Nav.Link>
              <Nav.Link as={Link} to="/blog" ><FontAwesomeIcon icon= {faBlog} />Blog</Nav.Link>
              <Nav.Link as={Link} to="/resume" ><FontAwesomeIcon icon= {faFile} />Resume</Nav.Link>
              <Nav.Link as={Link} to="/contact" ><FontAwesomeIcon icon= {faAddressBook} />Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
}