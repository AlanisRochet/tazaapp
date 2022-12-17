import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function CollapsibleExample() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="App.js"> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Card.js">Productos</Nav.Link>
              <Nav.Link href="#pricing">Contactanos</Nav.Link>
              <NavDropdown title="Mandanos tu Diseño" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tazas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Botellas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jarras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Quiero armar mi combo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Medios de pago</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Conocenos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar>
    );

  }
  
  export default CollapsibleExample;