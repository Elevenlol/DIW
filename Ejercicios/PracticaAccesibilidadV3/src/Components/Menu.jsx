import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buscador from "./Buscador";
import { Link } from "react-router-dom";

const Menu = ({ onSetSelected }) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>Magic The Gathering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" id="link" to="/">
              Principal
            </Link>
            <Link className="nav-link" id="link" to="/videos">
              Videos
            </Link>
            <Buscador onSetSelected={onSetSelected}></Buscador>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
