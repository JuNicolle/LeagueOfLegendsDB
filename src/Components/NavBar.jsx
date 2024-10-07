import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#">JungleTop LOL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} href="#action1">Accueil</Link>
            <Link to={"LorePage"} href="#action2">Histoire</Link>
            <NavDropdown title="L'Univers LOL" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/ChampionsPage">Champions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/RegionsPage" href="#action4">
                Regions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Actualités
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Quizz
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;