import { Navbar, Container, Form, Offcanvas, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ClubsFilter from '../ClubsFilter/ClubsFilter';
import './Navigation.css'

function Navigation() {

    return (

        <Navbar key={false} expand={false} bg='dark' data-bs-theme='dark' sticky='top'>
            <Container className='d-flex justify-content-center' fluid>

                <Navbar.Toggle className='position-absolute' style={{ left: '16px' }} aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Brand>
                    <img className='logo' src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1723050472/padel_blanco_td0cxz.svg" alt="" />
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement='start'

                >
                    <Offcanvas.Header closeButton>

                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link to="/" as={Link}>Inicio</Nav.Link>
                            <Nav.Link to="/clubs" as={Link}>Clubs</Nav.Link>
                            <ClubsFilter />
                            <Nav.Link to="/about" as={Link}>Sobre nosotros</Nav.Link>

                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )

}

export default Navigation