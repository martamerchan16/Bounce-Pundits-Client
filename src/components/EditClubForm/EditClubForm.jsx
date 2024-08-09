import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditClubForm.css'
import { CloseButton, Col, FormCheck, InputGroup, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './../Spinners/Spinner'
import { SERVICES, FACILITIES } from '../../consts/club-const';

const EditClubForm = ({ setShowModal, fetchClub }) => {
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
        pictures: [],
        services: []
    })

    const [contactData, setContactData] = useState({
        web: "",
        email: "",
        phone: ''
    })


    const [facilitiesData, setFacilitiesData] = useState(
        [
            {
                name: '',
                price: '',
                indoor: '',
                outdoor: ''
            }
        ]
    )

    const [locationData, setLocationData] = useState({
        latitude: "",
        longitude: ""
    })

    const handlePictureChange = (event, currentIndex) => {
        const { value } = event.target;

        const picturesCopy = [...clubData.pictures]
        picturesCopy[currentIndex] = value
        setClubData({ ...clubData, pictures: picturesCopy });
    };



    useEffect(() => {
        fetchClubsData()
    }, [])

    const fetchClubsData = () => {
        axios
            .get(`${API_URL}/clubs/${id}`)
            .then((response) => {
                setClubData(response.data)
                setContactData(response.data.contact)
                setFacilitiesData(response.data.facilities)
                setIsLoading(false)
                setLocationData(response.data.location)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        const requestBody = {
            ...clubData,
            contact: contactData,
            facilities: facilitiesData,
            location: locationData
        }

        axios
            .put(`${API_URL}/clubs/${id}`, requestBody)
            .then(res => {
                navigate(`/clubs/${id}`)
                setShowModal(false)
                fetchClub()
            })

            .catch(err => {
                console.log(err)
            })
    }

    const deleteClub = () => {
        axios
            .delete(`${API_URL}/clubs/${id}`)
            .then(res => navigate(`/clubs`))
            .catch((error) => console.log(error))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setClubData({ ...clubData, [name]: value })
    }

    const handleContactChange = e => {
        const { value, name } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setLocationData({ ...locationData, [name]: value })
    }


    const handleFacilityChange = (event, currentIndex) => {
        const { value, name } = event.target

        const facilitiesCopy = [...facilitiesData]
        facilitiesCopy[currentIndex][name] = value
        setFacilitiesData(facilitiesCopy)
    }

    const addNewSport = () => {
        const newFacilities = [...facilitiesData, { name: '', price: '', indoor: '', outdoor: '' }]
        setFacilitiesData(newFacilities)
    }

    const addNewPicture = () => {
        const picturesCopy = [...clubData.pictures]
        picturesCopy.push('')

        setClubData({ ...clubData, pictures: picturesCopy })
    }

    const deleteSport = (sportIdToDelete) => {
        const facilitiesCopy = [...facilitiesData];
        facilitiesCopy.splice(sportIdToDelete, 1);
        setFacilitiesData(facilitiesCopy);
    }

    const deletePicture = (pictureIdToDelete) => {
        const pictureCopy = [...clubData.pictures];
        pictureCopy.splice(pictureIdToDelete, 1);

        setClubData({ ...clubData, pictures: pictureCopy })
    }


    const handleServiceChange = (event) => {

        const { name } = event.target

        setClubData(prevState => {
            const services = prevState.services.some(eachStateService => eachStateService.name == name)
                ? prevState.services.filter(s => s.name !== name)
                : [...prevState.services, { name: name }]

            return { ...prevState, services };
        })
    }

    return (
        <div className="EditClubForm">
            {isLoading
                ? <Spinner />
                : <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label style={{ fontWeight: 'bold' }}>Nombre del Club</Form.Label>
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
                                <Form.Label>Ciudad</Form.Label>
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
                                <Form.Label>Localidad</Form.Label>
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
                                <Form.Label>Calle</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clubData.address}
                                    placeholder="Enter your address"
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
                    <hr />

                    <Form.Group className="mb-3" controlId="servicesField">
                        <Row>
                            <Form.Label style={{ fontWeight: 'bold' }}>Servicios</Form.Label>
                            {
                                SERVICES.map((eachService) => {
                                    return (
                                        <Col md={{ span: 6 }}>
                                            <Form.Check
                                                key={eachService.name}
                                                type="checkbox"
                                                label={eachService.name}
                                                checked={clubData.services.some(eachStatusService => eachStatusService.name === eachService.name)}
                                                onChange={handleServiceChange}
                                                name={eachService.name} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="facilitiesField">
                        <Form.Label style={{ fontWeight: 'bold' }} className="mt-4 mb-2">Deportes disponibles</Form.Label>
                        {
                            facilitiesData.map((eachFacility, idx) => {

                                return (

                                    <div className="mt-3 mb-3 facilityFields" style={{ background: "#e8e8e8", padding: 10 }}>
                                        <Row>
                                            <Col md={{ span: 12, offset: 0 }} className="text-end">
                                                <CloseButton onClick={() => deleteSport(idx)} />
                                            </Col>
                                            <Col>
                                                <Form.Label>Deporte Nº{idx + 1}</Form.Label>
                                                <Form.Select
                                                    onChange={e => handleFacilityChange(e, idx)}
                                                    value={facilitiesData[idx].name}
                                                    name="name"
                                                    aria-label="select sport">
                                                    <option>Selecciona deporte</option>

                                                    {
                                                        FACILITIES.map(eachFacility => <option key={eachFacility.name} value={eachFacility.name}>{eachFacility.name}</option>)
                                                    }

                                                </Form.Select>
                                            </Col>
                                            <Col md={{ span: 6 }}>
                                                <Form.Label>Precio/hora</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    value={facilitiesData[idx].price}
                                                    placeholder="Escribe aqui el precio"
                                                    onChange={e => handleFacilityChange(e, idx)}
                                                    name="price" />
                                            </Col>
                                            <Col md={{ span: 6 }}>
                                                <Form.Label>Nº Pistas Indoor</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    value={facilitiesData[idx].indoor}
                                                    placeholder="Escribe aqui nº pistas indoor disponibles"
                                                    onChange={e => handleFacilityChange(e, idx)}
                                                    name="indoor" />
                                            </Col>
                                            <Col md={{ span: 6 }}>
                                                <Form.Label>Nº Pistas Outdoor</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    value={facilitiesData[idx].outdoor}
                                                    placeholder="Escribe aqui nº pistas outdoor disponibles"
                                                    onChange={e => handleFacilityChange(e, idx)}
                                                    name="outdoor" />
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                        }

                        <Button variant="dark" onClick={addNewSport}>Añadir Deporte</Button>
                    </Form.Group>
                    <Form.Label style={{ fontWeight: 'bold' }}>Imagen del Club</Form.Label>
                    {
                        clubData.pictures.map((echPicture, idx) => {
                            return (
                                <div key={idx}>
                                    <Form.Group className="mb-3" controlId="imagesField">
                                        <Form.Label>Imagen Nº{idx + 1}</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="url"
                                                value={clubData.pictures[idx]}
                                                placeholder="Introduce aqui la URL de tu imagen"
                                                onChange={e => handlePictureChange(e, idx)}
                                                name="pictures"
                                            />
                                            <Button variant="outline-danger" onClick={() => deletePicture(idx)}>
                                                Eliminar
                                            </Button>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                            )
                        })
                    }
                    <div className="d-grid gap-2 m-5">
                        <Button variant="dark" onClick={addNewPicture}>
                            Añadir imagen
                        </Button>
                    </div>
                    <hr />

                    <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label className="mt-3" style={{ fontWeight: 'bold' }}>Informacion de contacto</Form.Label>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group controlId="emailField">
                                <Form.Label>Correo electronico</Form.Label>
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
                                <Form.Label>Telefono</Form.Label>
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
                        <Form.Label> Pagina Web</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="Enter Url"
                            value={contactData.web}
                            onChange={handleContactChange}
                            name="web" />
                    </Form.Group>

                    <Form.Label style={{ fontWeight: 'bold' }}>Ubicacion</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="latitudeField">
                                <Form.Control
                                    type="text"
                                    value={locationData.latitude}
                                    placeholder="Escribe aqui el numero de latitud"
                                    onChange={handleLocationChange}
                                    name="latitude"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="longitudeField">
                                <Form.Control
                                    type="text"
                                    value={locationData.longitude}
                                    placeholder="Escribe aqui el numero de longitud"
                                    onChange={handleLocationChange}
                                    name="longitude"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-grid gap-2 m-5">
                        <Button variant="outline-dark" type='submit'>Guardar Cambios</Button>
                        <Button variant="outline-danger" onClick={() => deleteClub()}>Eliminar Club</Button>
                    </div>
                </Form>
            }

        </div>
    )
}

export default EditClubForm

