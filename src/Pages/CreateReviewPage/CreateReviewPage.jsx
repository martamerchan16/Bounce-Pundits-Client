import CreateReviewForm from "../../components/CreateReviewForm/CreateReviewForm";
import { Container, Row, Col } from "react-bootstrap";

const CreateReviewPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>New review</h1>
          <hr />

          <CreateReviewForm />
        </Col>
      </Row>
    </Container>
  );
};
export default CreateReviewPage;
