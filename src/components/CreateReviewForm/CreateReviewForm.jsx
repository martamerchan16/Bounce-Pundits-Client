import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

const CreateReviewForm = () => {
  const { id } = useParams();

  const [reviewData, setReviewData] = useState({
    user: "",
    comment: "",
    rating: 0,
    date: "",
  });

  const handlerInputChange = (e) => {
    const { value, name } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      user: "",
      comment: "",
    };

    axios
      .post(`${API_URL}/clubs/${id}`, requestBody)
      .then((res) => navigate("/clubs"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="CreateNewForm mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            value={reviewData.user}
            onChange={handlerInputChange}
            name="user"
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea" label="comment">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={reviewData.comment}
            onChange={handlerInputChange}
            name="comment"
          />
        </FloatingLabel>

        <div className="d-grid">
          <Button variant="dark" type="submit" className="mt-3">
            Add review
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateReviewForm;
