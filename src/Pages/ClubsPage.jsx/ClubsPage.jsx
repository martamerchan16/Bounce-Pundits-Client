import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ClubCard from "../../components/ClubCard/ClubCard"
import { Card, Col, Row } from "react-bootstrap"



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

    return (
        < div className="ClubsPage" >

            {isLoading ?
                <h1>Cargando!!!...</h1>
                : clubs.map(eachClub => {

                    return (
                        <div key={eachClub.id}>
                            < Link to={`${API_URL}/clubs/${eachClub.id}`} />
                            <ClubCard {...eachClub} />
                        </div>
                    )


                })}

        </div >


    );
}

export default ClubPage







