import Container from "react-bootstrap/Container";
import Logo from "../assets/img/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../assets/css/navigation.css";

const expand = "sm";

const Navigation = () => {
  return (
    <>
      <Navbar
        key={expand}
        variant="light"
        expand={expand}
        className="text-black sticky-top nav-color"
        style={{ zIndex: "2" }}
      >
        <Container fluid className="px-5">
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/#ourServices" className="color-black">
                  Our Services
                </Nav.Link>
                <Nav.Link href="/#whyUs" className="color-black">
                  Why Us
                </Nav.Link>
                <Nav.Link href="/#testimonial" className="color-black">
                  Testimonial
                </Nav.Link>
                <Nav.Link href="/#faq" className="color-black">
                  FAQ
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
