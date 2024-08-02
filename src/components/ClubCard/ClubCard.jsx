import { Card, ListGroup, Row } from 'react-bootstrap'
import './ClubCard.css'

const ClubCard = ({ pictures, name, facilities, city, town, services }) => {





    return (
        <Row xs={1} md={2} className="g-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="imagenCard" variant="top" src="https://imgs.search.brave.com/zLCiAgpLMlcieuGsIUtQCHPHm7Z-R10AK-YV9y4Zb1E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2x1Ymxhc2FudGEu/Y29tL2FwcC93ZWJy/b290L19yZXNpemVk/L3VwbG9hZHMvcGFn/ZXMvc3BvcnRzL3Jh/Y2tldHNwb3J0cy9w/YWRlbC1jbGFzcy1i/NGQxMTNhNTk0MGY4/MWM1NWQxMGM4OTE3/NmY4OGMxZi5qcGc" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-clubs">
                        <ListGroup.Item>City: {city}</ListGroup.Item>
                        <ListGroup.Item>Town: {town}</ListGroup.Item>
                        <ListGroup.Item>Services: {services.map(elm => ` ${elm}`)}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Row>
    )
}
export default ClubCard