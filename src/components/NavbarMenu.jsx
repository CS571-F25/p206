import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css";

export default function NavbarMenu() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm navbar-container">
      <Container className="navbar-inner">

        <Navbar.Brand as={Link} to="/" className="navbar-brand fw-bold">
          My Travel Moments
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/destinations" className="nav-link">
              Destinations
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites" className="nav-link">
              Favorites
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="nav-link">
              About Me
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
