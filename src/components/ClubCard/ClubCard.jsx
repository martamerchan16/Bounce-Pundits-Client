import { Card, ListGroup } from 'react-bootstrap'
import './ClubCard.css'
import { Link } from 'react-router-dom'

const ClubCard = ({ pictures, name, city, town, id }) => {

    return (
        <Card >
            <Link to={`/clubs/${id}`}>
                <Card.Img className="imagenCard" variant="top" src={pictures[0]} />
            </Link>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup className="list-group-clubs">
                    <ListGroup.Item>{city} | {town} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default ClubCard