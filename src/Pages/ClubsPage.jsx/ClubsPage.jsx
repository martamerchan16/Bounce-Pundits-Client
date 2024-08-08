import axios from "axios"
import { useEffect, useState } from "react"
import ClubCard from "../../components/ClubCard/ClubCard"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import Spinner from "../../components/Spinners/Spinner"
import CreateClubForm from "../../components/CreateClubForm/CreateClubForm"

const API_URL = "http://localhost:5005"


const ClubPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetchAllClubs()
    }, [])


    const fetchAllClubs = () => {

        axios
            .get(`${API_URL}/clubs`)
            .then((response) => {
                setClubs(response.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))

    }


    return (
        < div className="ClubsPage" >
            <Col className="text-center pt-5 mt-5 col pt" style={{ fontWeight: 'bold' }}>
                <h1>Bounce Pundits Clubs</h1>
            </Col>
            <Row>
                <Col className="text-center mb-4 mt-4" md={{ span: 4, offset: 4 }}>

                    En Bounce Pundits, accede a clubs con instalaciones de primer nivel y entrenadores expertos.
                    Disfruta la variedad de pistas de alta calidad.
                    Mejora tus habilidades en una comunidad apasionada y profesional.
                </Col>
            </Row>

            <Button
                variant="dark"
                style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
                onClick={() => setShowModal(true)}>Añadir Club</Button>


            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center" style={{ fontWeight: 'bold' }}>Nuevo Club</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateClubForm setShowModal={setShowModal} />
                </Modal.Body>
            </Modal>

            <Container>
                {isLoading ?
                    <Spinner />
                    : <Row className="mb-4" >
                        {clubs.map(eachClub => {

                            return (
                                <Col md={{ span: 4, offset: 0 }} key={eachClub.id} className="mb-4">
                                    <ClubCard {...eachClub} />
                                </Col>

                            )

                        })
                        }
                    </Row>
                }
            </Container>
        </div >
    )
}

export default ClubPage
