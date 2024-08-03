import { Link, useParams } from 'react-router-dom'
import './ClubDetailsPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ClubImgCarousel from '../../components/ClubImgCarousel/ClubImgCarousel'
import { Col, Container, Row, Button } from 'react-bootstrap'
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll'

const ClubDetailsPage = () => {

    const API_URL = 'http://localhost:5005'

    const { id } = useParams()

    const [club, setClub] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchClub()
    }, [])

    const fetchClub = () => {
        axios
            .get(`${API_URL}/clubs/${id}`)
            .then((response) => {
                setClub(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ClubDetailsPage">
            {isLoading
                ? <h1>cargando.....</h1>
                : <div className='ClubDetailsPage'>


                    <Row>
                        <Col>
                            <ClubImgCarousel />
                            <SmoothScroll />

                            <section id="info">
                                <Row>
                                    <Col>
                                        <h2>{club.name}</h2>
                                        <p> {club.town}, {club.city} - {club.address}, {club.zipCode}</p>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima quibusdam sequi sunt consequatur natus cupiditate, iste velit quasi voluptate? Perferendis ratione eveniet, eos id minus enim iste vero magni.</p>
                                    </Col>

                                    <Col>
                                        <Link to={`/clubs/edit/${id}`} ><Button variant='dark'>✏️</Button></Link>

                                    </Col>
                                </Row>


                            </section>

                            <section id="howToGet">
                                <h2>Map</h2>
                                <p>Este es el contenido de la sección Cosas 2.</p>
                                <Button variant='dark'>📍</Button>
                            </section>

                            <section id="reviews" >
                                <h2>Map</h2>
                                <p>Este es el contenido de la sección Cosas 2.</p>
                            </section>
                        </Col>
                    </Row>

                </div>
            }

        </div>
    )
}

export default ClubDetailsPage