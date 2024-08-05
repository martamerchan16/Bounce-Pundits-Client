import { Link, useNavigate, useParams } from 'react-router-dom'
import './ClubDetailsPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ClubImgCarousel from '../../components/ClubImgCarousel/ClubImgCarousel'
import { Col, Container, Row, Button, Image, DropdownButton, Dropdown } from 'react-bootstrap'
import SmoothScroll from '../../components/SmoothScroll/SmoothScroll'
import Spinner from '../../components/Spinners/Spinner'

const ClubDetailsPage = () => {

    const API_URL = 'http://localhost:5005'

    const { id } = useParams()

    const navigate = useNavigate()

    const [club, setClub] = useState()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchClub()
        fetchReviews()
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

    const fetchReviews = () => {
        axios
            .get(`${API_URL}/clubs/${id}?_embed=reviews`)
            .then((response) => {
                setReviews(response.data.reviews)
            })
            .catch(err => console.log(err))
    }

    const deleteReview = reviewId => {
        axios
            .delete(`${API_URL}/reviews/${reviewId}`) //TODO: No me funciona lo de eliminar revisar el lunes
            .then(res => fetchReviews())
            .catch((error) => console.log(error))
    }

    return (
        <div className="ClubDetailsPage">
            {isLoading
                ? <Spinner />
                : <div className='ClubDetailsPage'>

                    <ClubImgCarousel />
                    <SmoothScroll />

                    <section id="info">

                        <h2>{club.name}</h2>
                        <p> {club.town}, {club.city} - {club.address}, {club.zipCode}</p>
                        <hr />
                        <Row>
                            <Col>
                                <h3>Servicios:</h3>
                                <ul>
                                    {club.services.map(e => <li>{e}</li>)}
                                </ul>
                            </Col>
                            <Col>
                                <h3>Deportes disponibles:</h3>
                                <ul>
                                    <li>Tennis: 5€/h</li>
                                    <li>Paddle: 5€/h</li>
                                    <li>Ping Pong: 5€/h</li>
                                    <li>Fronton: 5€/h</li>
                                </ul>
                            </Col>
                        </Row>

                        <h4>Contacto:</h4>
                        <a href='https://www.padelsporthome.com/'><p>🌐{club.contact.web}</p></a>
                        <p>📞{club.contact.phone}</p>
                        <p>📧{club.contact.email}</p>
                        <Link to={`/clubs/edit/${id}`} className='editbtn'><Button variant='dark'>✏️</Button></Link>

                    </section>

                    <section id="howToGet">
                        <h2>map</h2>
                        <p>Este es el contenido de la sección Cosas 2.</p>
                        <Button variant='dark'>📍</Button>
                    </section>

                    <section id="reviews" >
                        <h2>Reviews/Reseñas:</h2>
                        <Link to={`/clubs/${id}/review/create`}><Button variant='dark'>💬</Button></Link>
                        {
                            reviews.map(eachReview => {

                                return (
                                    <div key={eachReview.id} className="review">
                                        <Row  >
                                            <Col xs={{ span: 3 }} md={{ span: 2 }} lg={{ span: 1 }} className="d-flex justify-content-center align-items-start pt-2">
                                                <Image className='imgUserReview' roundedCircle={true} src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1722773773/divertida-caricatura-de-aguacate-pegatina_u0nhfh.jpg" />
                                            </Col>
                                            <Col className="d-flex flex-column justify-content-start">
                                                <Row>
                                                    <Col>
                                                        <h6> {eachReview.user} | {eachReview.date}</h6>
                                                        <p>rating with starts</p>
                                                    </Col>
                                                    <Col className="d-flex flex-row justify-content-end">
                                                        <DropdownButton variant="outline-dark" id="dropdown-basic-button" title="...">
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" onClick={() => deleteReview(eachReview.id)}>Delete</Dropdown.Item>
                                                        </DropdownButton>

                                                    </Col>
                                                </Row>
                                                <p>{eachReview.comment}</p>

                                            </Col>
                                        </Row>
                                    </div>
                                )

                            })
                        }

                    </section>

                </div >
            }

        </div >
    )
}

export default ClubDetailsPage