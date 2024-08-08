import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function AppHeader() {
  return (
    <div>
      <Navbar className='navbar' expand="lg">
        <Container>
          <Navbar.Brand className='title' href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav'>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about" >About</Nav.Link>
              <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
              <Nav.Link as={Link} to="/resume" >Resume</Nav.Link>
              <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}