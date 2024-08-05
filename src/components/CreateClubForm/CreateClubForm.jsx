import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const CreateClubForm = () => {
    const [clubData, setClubData] = useState({
        name: '',
        city: '',
        town: '',
        address: '',
        zipCode: '',
        contact: {
            web: "",
            email: "",
            phone: ''
        },
        services: []
    });

    const navigate = useNavigate();

    const handleCheckboxChange = e => {
        const { name, checked } = e.target;
        setClubData(prevState => {
            const services = checked
                ? [...prevState.services, name]
                : prevState.services.filter(service => service != name);
            return { ...prevState, services }
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;

        if (name in clubData.contact) {
            setClubData(prevState => ({
                ...prevState, contact: { ...prevState.contact, [name]: value }
            }));
        } else {
            setClubData(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }


    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post(`${API_URL}/clubs`, clubData)
            .then(res => navigate('/clubs'))
            .catch(err => console.log(err));
    };

    return (
        <div className="CreateClubForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nameField">
                    <Form.Label>Nombre del Club</Form.Label>
                    <Form.Control
                        type="text"
                        value={clubData.name}
                        placeholder="Escribe el nombre de tu club"
                        onChange={handleInputChange}
                        name="name" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="cityField">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                value={clubData.city}
                                placeholder="Escribe aqui la ciudad"
                                onChange={handleInputChange}
                                name="city" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="townField">
                            <Form.Label>Barrio</Form.Label>
                            <Form.Control
                                type="text"
                                value={clubData.town}
                                placeholder="Escribe aqui el barrio"
                                onChange={handleInputChange}
                                name="town" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="addressField">
                            <Form.Label>Calle</Form.Label>
                            <Form.Control
                                type="text"
                                value={clubData.address}
                                placeholder="Escribe aqui la calle"
                                onChange={handleInputChange}
                                name="address" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="zipCodeField">
                            <Form.Label>Codigo Postal</Form.Label>
                            <Form.Control
                                type="number"
                                value={clubData.zipCode}
                                placeholder="28810"
                                onChange={handleInputChange}
                                name="zipCode" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="servicesField">
                    <Row>
                        <Form.Label>Services</Form.Label>
                        <Col>
                            {["wifi", "restaurant", "parking", "lookerRoom"].map(service => (
                                <Form.Check
                                    key={service}
                                    type="checkbox"
                                    label={service.charAt(0).toUpperCase() + service.slice(1)}
                                    checked={clubData.services.includes(service)}
                                    onChange={handleCheckboxChange}
                                    name={service} />
                            ))}
                        </Col>
                        <Col>
                            {["showers", "petFriendly", "swimmingPool", "shop"].map(service => (
                                <Form.Check
                                    key={service}
                                    type="checkbox"
                                    label={service.charAt(0).toUpperCase() + service.slice(1)}
                                    checked={clubData.services.includes(service)}
                                    onChange={handleCheckboxChange}
                                    name={service} />
                            ))}
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="imagesField">
                    <Form.Label>Images</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactField">
                    <Form.Label>Contact:</Form.Label>
                </Form.Group>
                <hr />
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="emailField">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={clubData.contact.email}
                                placeholder="Escribe aqui el email"
                                onChange={handleInputChange}
                                name="email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="phoneField">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="text"
                                value={clubData.contact.phone}
                                placeholder="Tel."
                                onChange={handleInputChange}
                                name="phone" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="webField">
                    <Form.Label>Web</Form.Label>
                    <Form.Control
                        type="url"
                        value={clubData.contact.web}
                        placeholder="Escribe aqui tu URL"
                        onChange={handleInputChange}
                        name="web" />
                </Form.Group>
                <div className="d-grid gap-2 m-5">
                    <Button type="submit" variant="dark">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateClubForm;




