import axios from "axios"
import { useEffect, useState } from "react"
import ClubCard from "../../components/ClubCard/ClubCard"
import { Button, Col, Container, Row } from "react-bootstrap"
import Spinner from "../../components/Spinners/Spinner"
import { Link } from "react-router-dom"

const API_URL = "http://localhost:5005"


const ClubPage = () => {

    const [clubs, setClubs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

    //     style = {{ padding: '20px 300px' }
    // }

    return (
        < div className="ClubsPage" >

            <h1 className="text-center" style={{ fontWeight: 'bold' }}>Bounce Pundits Clubs</h1>
            <Row>
                <Col>
                    <p className="text-center" xs={{ span: 1 }} md={{ span: 2 }} lg={{ span: 3 }} style={{}} >
                        En Bounce Pundits, accede a clubs con instalaciones de primer nivel y entrenadores expertos.
                        Disfruta la variedad de pistas de alta calidad.
                        Mejora tus habilidades en una comunidad apasionada y profesional.
                    </p>
                </Col>
            </Row>
            <Link to={'/clubs/create'}>
                <Button variant="outline-dark" style={{ padding: '10px 10px' }}>Añadir Club</Button>
            </Link>

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
