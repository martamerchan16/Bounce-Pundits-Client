import axios from "axios";
import { useState } from "react";

import {
  Button,
  CloseButton,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SERVICES, FACILITIES } from "../../consts/club-const";



const API_URL = import.meta.env.VITE_API_URL

const CreateClubForm = ({ setShowModal, fetchAllClubs }) => {
  const [clubData, setClubData] = useState({
    name: "",
    city: "",
    town: "",
    address: "",
    zipCode: "",
    services: [],
    pictures: [],
  });

  const [contactData, setContactData] = useState({
    web: "",
    email: "",
    phone: "",
  });

  const [facilitiesData, setFacilitiesData] = useState([
    {
      name: "",
      price: "",
      indoor: "",
      outdoor: "",

    },
  ]);

  const [locationData, setLocationData] = useState({
    latitude: "",
    longitude: ""
  })

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {

    const { name, checked } = e.target

    setClubData((prevState) => {
      const services = checked
        ? [...prevState.services, { name: name }]
        : prevState.services.filter((service) => service.name != name)
      return { ...prevState, services }
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClubData({ ...clubData, [name]: value })
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value })
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFacilityChange = (event, currentIndex) => {
    const { value, name } = event.target;

    const facilitiesCopy = [...facilitiesData];
    facilitiesCopy[currentIndex][name] = value;
    setFacilitiesData(facilitiesCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      ...clubData,
      contact: contactData,
      facilities: facilitiesData,
      location: locationData,
    }

    axios
      .post(`${API_URL}/clubs`, requestBody)
      .then((res) => {
        navigate("/clubs")
        setShowModal(false)
        fetchAllClubs()
      })
      .catch((err) => console.log(err));
  };

  const addNewSport = () => {
    const newFacilities = [
      ...facilitiesData,
      { name: "", price: "", indoor: "", outdoor: "" },
    ];
    setFacilitiesData(newFacilities);
  }

  const addNewPicture = () => {
    const picturesCopy = [...clubData.pictures]
    picturesCopy.push('')

    setClubData({ ...clubData, pictures: picturesCopy })
  }

  const handlePictureChange = (event, currentIndex) => {
    const { value } = event.target;

    const picturesCopy = [...clubData.pictures]
    picturesCopy[currentIndex] = value
    setClubData({ ...clubData, pictures: picturesCopy });
  };

  const deleteSport = (sportIdToDelete) => {
    const facilitiesCopy = [...facilitiesData];
    facilitiesCopy.splice(sportIdToDelete, 1);
    setFacilitiesData(facilitiesCopy);
  };

  const deletePicture = (pictureIdToDelete) => {
    const pictureCopy = [...clubData.pictures];
    pictureCopy.splice(pictureIdToDelete, 1);

    setClubData({ ...clubData, pictures: pictureCopy })
  }

  return (
    <div className="CreateClubForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nameField">
          <Form.Label style={{ fontWeight: 'bold' }}>Nombre del Club</Form.Label>
          <Form.Control
            type="text"
            value={clubData.name}
            placeholder="Escribe el nombre de tu club"
            onChange={handleInputChange}
            name="name"
          />
        </Form.Group>
        <div>
          <Form.Label style={{ fontWeight: 'bold' }} className="mb-2">Direccion</Form.Label>
        </div>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="cityField">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                value={clubData.city}
                placeholder="Escribe aqui la ciudad"
                onChange={handleInputChange}
                name="city"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="townField">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
                type="text"
                value={clubData.town}
                placeholder="Escribe aqui el barrio"
                onChange={handleInputChange}
                name="town"
              />
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
                name="address"
              />
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
                name="zipCode"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="servicesField">

          <Form.Label style={{ fontWeight: 'bold' }}>Servicios</Form.Label>
          <Row>
            {
              SERVICES.map((eachService, idx) => (

                <Col md={{ span: 6 }} key={idx}>
                  <Form.Check
                    key={eachService.name}
                    type="checkbox"
                    label={eachService.name}
                    checked={clubData.services.some(eachStatusService => eachStatusService.name === eachService.name)}
                    onChange={handleCheckboxChange}
                    name={eachService.name}
                  />
                </Col>

              ))}
          </Row>
          <FormGroup>
            <Col>
              <Form.Label style={{ fontWeight: 'bold' }} className="mt-4 mb-2">Deportes disponibles</Form.Label>
            </Col>
            {
              facilitiesData.map((eachFacility, idx) => {
                return (
                  <div
                    className="mt-3 mb-3 facilityFields"
                    style={{ background: "#e8e8e8", padding: 10 }}
                    key={idx}
                  >
                    <Row>
                      <Col md={{ span: 12, offset: 0 }} className="text-end">
                        <CloseButton onClick={() => deleteSport(idx)} />
                      </Col>
                      <Col>
                        <Form.Label>Deporte Nº{idx + 1}</Form.Label>
                        <Form.Select
                          onChange={(e) => handleFacilityChange(e, idx)}
                          value={facilitiesData[idx].name}
                          name="name"
                          aria-label="Default select example"
                        >
                          <option>Selecciona deporte</option>
                          {
                            FACILITIES.map(elm => <option value={elm.name} key={elm.name}>{elm.name}</option>)
                          }
                        </Form.Select>
                      </Col>

                      <Col md={{ span: 6 }}>
                        <Form.Label>Precio/hora</Form.Label>
                        <Form.Control
                          type="number"
                          value={facilitiesData[idx].price}
                          placeholder="Escribe aqui el precio"
                          onChange={(e) => handleFacilityChange(e, idx)}
                          name="price"
                        />
                      </Col>
                      <Col md={{ span: 6 }}>
                        <Form.Label>Nº Pistas Indoor</Form.Label>
                        <Form.Control
                          type="number"
                          value={facilitiesData[idx].indoor}
                          placeholder="Escribe aqui nº pistas indoor disponibles"
                          onChange={(e) => handleFacilityChange(e, idx)}
                          name="indoor"
                        />
                      </Col>

                      <Col md={{ span: 6 }}>
                        <Form.Label>Nº Pistas Outdoor</Form.Label>
                        <Form.Control
                          type="number"
                          value={facilitiesData[idx].outdoor}
                          placeholder="Escribe aqui nº pistas outdoor disponibles"
                          onChange={(e) => handleFacilityChange(e, idx)}
                          name="outdoor"
                        />
                      </Col>
                    </Row>
                  </div>
                );
              })}
          </FormGroup>
          <div className="d-grid gap-2 m-5">
            <Button variant="dark" onClick={addNewSport}>
              Añadir Deporte
            </Button>
          </div>
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

        <Form.Group className="mb-3" controlId="contactField">
          <Form.Label style={{ fontWeight: 'bold' }}>Informacion de contacto:</Form.Label>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="emailField">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                value={contactData.email}
                placeholder="Escribe aqui el email"
                onChange={handleContactChange}
                name="email"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="phoneField">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                value={contactData.phone}
                placeholder="Tel."
                onChange={handleContactChange}
                name="phone"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="webField">
          <Form.Label>Pagina Web</Form.Label>
          <Form.Control
            type="url"
            value={contactData.web}
            placeholder="Escribe aqui tu URL"
            onChange={handleContactChange}
            name="web"
          />
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
        <hr />
        <div className="d-grid gap-2 m-5">
          <Button type="submit" variant="dark">
            Crear Club
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateClubForm;
