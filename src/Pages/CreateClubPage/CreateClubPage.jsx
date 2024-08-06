import { Col, Container, Row } from "react-bootstrap"
import CreateClubForm from "../../components/CreateClubForm/CreateClubForm"


const CreateClubPage = () => {


    return (
        <div className="CreateClubPage">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}></Col>

                    <h1 className="text-center" style={{ fontWeight: 'bold' }}> Nuevo Club</h1>
                    <hr />

                    <CreateClubForm />
                </Row>
            </Container>
        </div>
    )
}

export default CreateClubPage