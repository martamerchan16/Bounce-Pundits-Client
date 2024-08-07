import { useState, useEffect } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const EditReviewForm = () => {
  const [reviewData, setReviewData] = useState({
    user: "",
    clubId: "",
    comment: "",
    rating: "",
    date: "",
  });

  const { id } = useParams(); // Get the review ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing review data
    axios
      .get(`${API_URL}/reviews/${id}`)
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((error) => console.error("Error fetching review data:", error));
  }, []);

  const handlerInputChange = (e) => {
    const { value, name } = e.target; //This line uses destructuring to extract value and name properties from e.target
    setReviewData({ ...reviewData, [name]: value }); //This line calls a function setReviewData to update the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDate = new Date().toDateString(); // Get the current date
    const requestBody = {
      ...reviewData,
      date: updatedDate, // Update the date
    };

    axios
      .put(`${API_URL}/reviews/${id}`, requestBody)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div className="EditReviewForm mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            value={reviewData.user}
            onChange={handlerInputChange}
            name="user"
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea" label="Comemtario">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={reviewData.comment}
            onChange={handlerInputChange}
            name="comment"
          />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Valoración</Form.Label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <Form.Check
                inline
                key={star}
                label={star}
                type="radio"
                name="rating"
                value={star}
                checked={reviewData.rating === String(star)}
                onChange={handlerInputChange}
              />
            ))}
          </div>
        </Form.Group>

        <div className="d-grid">
          <Button variant="dark" type="submit" className="mt-3">
            Actualizar reseña
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditReviewForm;
