import { Navbar, Container, Form, Offcanvas, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Navigation() {

    return (

        <Navbar key={false} expand={false} className="bg-body-tertiary" fixed='top'>
            <Container fluid>
                <Navbar.Brand to="/clubs/:id/review/create" as={Link}>Reseña</Navbar.Brand>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Buonce Pundits
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link to="/" as={Link}>Home</Nav.Link>
                            <Nav.Link to="/clubs" as={Link}>Clubs</Nav.Link>
                            <Nav.Link to="/about" as={Link}>About Us</Nav.Link>

                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )

}

export default Navigation