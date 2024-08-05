import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditClubForm.css'
import { Col, InputGroup, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditClubForm = () => {
    const API_URL = 'http://localhost:5005'

    const { id } = useParams()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)

    const [clubData, setClubData] = useState({
        name: '',
        city: '',
        town: '',
        address: '',
        zipCode: '',
        pictures: '',
        services: ["wifi", "restaurant", "parking", "lookerRoom", "showers", "petFriendly", "swimmingPool", "shop"]
    })

    const [contactData, setContactData] = useState({
        web: "",
        email: "",
        phone: ''
    })

    useEffect(() => {
        fetchClubsData()
    }, [])

    const fetchClubsData = () => {
        axios
            .get(`${API_URL}/clubs/${id}`)
            .then((response) => {
                setClubData(response.data)
                setContactData(response.data.contact)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleClubSubmit = event => {
        event.preventDefault()
        const { name, city, town, address, zipCode, pictures, services } = clubData
        const { web, phone, email } = contactData

        const requestBody = {
            name,
            city,
            town,
            address,
            zipCode,
            contact: contactData,
            pictures: [],
            services: [],
        }

        axios
            .put(`${API_URL}/clubs/${id}`, requestBody)
            .then(res => navigate(`/clubs/${id}`))
            .catch(err => {
                console.log(err)
            })
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setClubData({ ...clubData, [name]: value })
    }

    const handleContactChange = e => {
        const { value, name } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const handleServiceChange = (service) => {
        setClubData(prevState => {
            const services = prevState.services.includes(service)
                ? prevState.services.filter(s => s !== service) //TODO: PREGUNTAR A GERMAN CUAL SERIA LA MEJOR FORMA DE HACER ESTO, PORQUE LO VI EN INTERNET PERO NO ESTOY MUY SEGURA
                : [...prevState.services, service]

            return { ...prevState, services };
        })
    }

    return (
        <div className="EditClubForm">
            {isLoading
                ? <h1>cargandoo</h1>
                : <Form onSubmit={handleClubSubmit}>
                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label>Name Club</Form.Label>
                        <Form.Control
                            type="text"
                            value={clubData.name}
                            placeholder="Enter your club name"
                            onChange={handleInputChange}
                            name="name" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="cityField">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clubData.city}
                                    placeholder="Enter your city"
                                    onChange={handleInputChange}
                                    name="city" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="townField">
                                <Form.Label>Town</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clubData.town}
                                    placeholder="Enter your town"
                                    onChange={handleInputChange}
                                    name="town" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="addressField">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clubData.address}
                                    placeholder="Enter your address"
                                    onChange={handleInputChange}
                                    name="address" />
                            </Form.Group>

                        </Col>

                        <Col>

                            <Form.Group className="mb-3" controlId="zipCpdeField">
                                <Form.Label>ZipCode</Form.Label>
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
                                <Form.Check
                                    type="checkbox"
                                    label="Wifi"
                                    checked={clubData.services.includes("wifi")}
                                    onChange={() => handleServiceChange("wifi")}
                                    name="wifi" />
                                <Form.Check
                                    type="checkbox"
                                    label="Restaurant"
                                    checked={clubData.services.includes("restaurant")}
                                    onChange={() => handleServiceChange("restaurant")}
                                    name="restaurant" />
                                <Form.Check
                                    type="checkbox"
                                    label="Parking"
                                    checked={clubData.services.includes("parking")}
                                    onChange={() => handleServiceChange("parking")}
                                    name="parking" />
                                <Form.Check
                                    type="checkbox"
                                    label="Looker Room"
                                    checked={clubData.services.includes("lookerRoom")}
                                    onChange={() => handleServiceChange("lookerRoom")}
                                    name="lookerRoom" />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="Showers"
                                    checked={clubData.services.includes("showers")}
                                    onChange={() => handleServiceChange("showers")}
                                    name="showers" />
                                <Form.Check
                                    type="checkbox"
                                    label="Pet Friendly"
                                    checked={clubData.services.includes("petFriendly")}
                                    onChange={() => handleServiceChange("petFriendly")}
                                    name="petFriendly" />
                                <Form.Check
                                    type="checkbox"
                                    label="Swimming pool"
                                    checked={clubData.services.includes("swimmingPool")}
                                    onChange={() => handleServiceChange("swimmingPool")}
                                    name="swimmingPool" />
                                <Form.Check
                                    type="checkbox"
                                    label="Shop"
                                    checked={clubData.services.includes("shop")}
                                    onChange={() => handleServiceChange("shop")}
                                    name="shop" />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="imagesField">
                        <Form.Label>Images</Form.Label>{/* TODO: CUAL SERA LA MEJOR FORMA DE HACER QUE SE PUEDAN SUBIR IMAGENES */}
                        <Form.Control type="url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label>Contact:</Form.Label>
                    </Form.Group>

                    <hr />

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="emailField">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={contactData.email}
                                    placeholder="Enter email"
                                    onChange={handleContactChange}
                                    name="email" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="emailField">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={contactData.phone}
                                    placeholder="Enter phone"
                                    onChange={handleContactChange}
                                    name="phone"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="imagesField">
                        <Form.Label>Web</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="Enter Url"
                            value={contactData.web}
                            onChange={handleContactChange}
                            name="web" />
                    </Form.Group>


                    <div className="d-grid gap-2 m-5">
                        <Button variant="outline-dark" type='submit'>Submit</Button>
                    </div>
                </Form>
            }

        </div>
    )
}

export default EditClubForm


// TODO: creo que seria mejor convertir facilities en un array para poder implementar la logica de services,de momento lo dejo aqui comentado porque no se como hacerlo
// < Form.Group className = "mb-3" controlId = "faicilitiesField" >
//                 <Form.Label>Facilities:</Form.Label>
//                 <hr />
//                 <Row>
//                     <Col>
//                         <InputGroup className="mb-3">
//                             <InputGroup.Text>
//                                 <Form.Check
//                                     type="checkbox"
//                                     aria-label="Check if Tennis is practiced in your club"
//                                 />
//                                 Tennis
//                             </InputGroup.Text>
//                             <Form.Control
//                                 type='number'
//                                 aria-label="Indicate the price of the tennis court"
//                                 placeholder="Enter price per hour"
//                             />
//                         </InputGroup>

//                     </Col>

//                     <Col>
//                         <InputGroup className="mb-3">
//                             <InputGroup.Text>
//                                 <Form.Check
//                                     type="checkbox"
//                                     aria-label="Check if Paddle is practiced in your club"
//                                 />
//                                 Paddle
//                             </InputGroup.Text>
//                             <Form.Control
//                                 type='number'
//                                 aria-label="Indicate the price of the paddle court"
//                                 placeholder="Enter price per hour"
//                             />
//                         </InputGroup>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <InputGroup className="mb-3">
//                             <InputGroup.Text>
//                                 <Form.Check
//                                     type="checkbox"
//                                     aria-label="Check if Ping Pong is practiced in your club"
//                                 />
//                                 Ping Pong
//                             </InputGroup.Text>
//                             <Form.Control
//                                 type='number'
//                                 aria-label="Indicate the price of the ping pong court"
//                                 placeholder="Enter price per hour"
//                             />
//                         </InputGroup>

//                     </Col>

//                     <Col>
//                         <InputGroup className="mb-3">
//                             <InputGroup.Text>
//                                 <Form.Check
//                                     type="checkbox"
//                                     aria-label="Checkbox for following text input"
//                                 />
//                                 Fronton
//                             </InputGroup.Text>
//                             <Form.Control
//                                 type='number'
//                                 aria-label="Indicate the price of the fronton court"
//                                 placeholder="Enter price per hour"
//                             />
//                         </InputGroup>

//                     </Col>
//                 </Row>
//             </Form.Group >