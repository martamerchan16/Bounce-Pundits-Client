import axios from "axios"
import { useEffect, useState } from "react"
import { Form, ListGroup } from "react-bootstrap"


const ClubsFilter = () => {

    const API_URL = 'http://localhost:5005'

    const [clubsFiltered, setClubsFiltered] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const handleClubsFilter = (event) => {
        const { value } = event.target
        fetchClubsFilter(value)
    }

    const fetchClubsFilter = (value) => {
        axios
            .get(`${API_URL}/clubs?city_like=${value}`)
            .then((response) => {
                setClubsFiltered(response.data)
                console.log(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ClubsFilter">
            <Form className="d-flex" >
                <Form.Control
                    onKeyUp={handleClubsFilter}
                    type="search"
                    placeholder="Buscar clubs"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
            <ListGroup>

                {
                    clubsFiltered.map((eachClub) => {
                        return (
                            <ListGroup.Item>{eachClub.city}</ListGroup.Item>
                        )
                    })
                }


            </ListGroup>

        </div>
    )
}
export default ClubsFilter