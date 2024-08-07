import EditReviewForm from "../../components/EditReviewForm/EditReviewForm"
import { Container, Row, Col } from "react-bootstrap";

const EditReviewPage = () => {
    return (
        <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Editar reseña</h1>
          <hr />
          <EditReviewForm/>
        </Col>
      </Row>
    </Container>
    )
}


export default EditReviewPage