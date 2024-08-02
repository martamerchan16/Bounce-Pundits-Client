import { useParams } from 'react-router-dom'
import './ClubDetailsPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ClubImgCarousel from '../../components/ClubImgCarousel/ClubImgCarousel'
import { Col, Container, Row } from 'react-bootstrap'
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

                    <Container>
                        <Row>
                            <Col>
                                <ClubImgCarousel />
                                <SmoothScroll />
                            </Col>
                        </Row>
                    </Container>



                </div>
            }

        </div>
    )
}

export default ClubDetailsPage