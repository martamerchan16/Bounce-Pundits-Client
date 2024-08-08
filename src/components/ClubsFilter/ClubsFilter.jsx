import axios from "axios"
import { useEffect, useState } from "react"
import { Form, ListGroup } from "react-bootstrap"
import './ClubsFilter.css'
import { Link, useParams } from "react-router-dom"


const ClubsFilter = () => {

    const { id } = useParams()

    const API_URL = 'http://localhost:5005'

    const [clubsFiltered, setClubsFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const handleClubsFilter = (event) => {
        const { value } = event.target
        fetchClubsFilter(value)
    }

    const handleInputChange = e => {
        const { value } = e.target
        setSearchInput(value)
    }

    const handleLink = e => {
        const { value } = e.target
        setClubsFiltered([])
        setSearchInput('')
    }



    const fetchClubsFilter = (value) => {

        const promises = [
            axios.get(`${API_URL}/clubs?city_like=${value}`),
            axios.get(`${API_URL}/clubs?name_like=${value}`)
        ]

        Promise
            .all(promises)
            .then(([clubsByCity, clubsByName]) => {
                let fullResults = [...clubsByCity.data, ...clubsByName.data]

                const withoutDuplicates = {}

                const uniqueResults = fullResults.filter((eachObject) => {
                    const exists = !withoutDuplicates[eachObject.id]
                    withoutDuplicates[eachObject.id] = true
                    return exists
                })

                setClubsFiltered(uniqueResults)
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
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </Form>
            <ListGroup>

                {
                    clubsFiltered.map((eachClub) => {
                        return (
                            <Link to={`/clubs/${eachClub.id}`} key={eachClub.id} onClick={handleLink} className="linkClub">
                                <ListGroup.Item className="listClubs">

                                    <img src={eachClub.pictures[0]} alt="" />
                                    <div className="d-flex" >
                                        <p className="ps-3">{eachClub.name}</p>
                                        <p className="ps-3">{eachClub.city}</p>
                                    </div>

                                </ListGroup.Item>
                            </Link>
                        )
                    })
                }


            </ListGroup>

        </div>
    )
}
export default ClubsFilter