import React, { useState } from 'react'; 
import { Carousel, Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './gym.css';

const Gym = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal state

  const isProceedEnabled = selectedGender && selectedAge && selectedPrice;

  // Modal handlers
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="gym-container">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img className="d-block w-100" src="https://slamfitnessstudio.in/wp-content/uploads/2023/04/slam-ban1.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/11/Online-personal-training-1920x591-1.jpg?fit=1920%2C591&ssl=1" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://img.freepik.com/free-vector/fitness-gym-training-twitch-banner_23-2150681508.jpg?t=st=1728389866~exp=1728393466~hmac=1589fcbf8ad4efca30fad422cb03bfa1260f025a52d4c454b5b8a69ac74e0b4b&w=1380" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* Select Gender Section */}
      <h3>Select Gender</h3>
      <Container>
        <Row className="gender-selection justify-content-center">
          <Col md={3}>
            <Card
              className={`selection-card ${selectedGender === 'Men' ? 'selected' : ''}`}
              onClick={() => setSelectedGender('Men')}
            >
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/powerful-stylish-body-builder-with-dumbbells-look-camera-isolated-dark-background_1024356-7298.jpg?ga=GA1.1.1857534666.1690658127&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Men</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedGender === 'Women' ? 'selected' : ''}`}
              onClick={() => setSelectedGender('Women')}
            >
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/girl-red-shirt-stands-front-window-with-sun-shining-through-window_427757-32950.jpg?ga=GA1.1.1857534666.1690658127&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Women</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Select Age Section */}
      <h3>Select Age</h3>
      <Container>
        <Row className="age-selection justify-content-center">
          <Col md={3}>
            <Card
              className={`selection-card ${selectedAge === 'Under 18' ? 'selected' : ''}`}
              onClick={() => setSelectedAge('Under 18')}
            >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/children-sport_23-2148108576.jpg?ga=GA1.1.1857534666.1690658127&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Under 18</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedAge === 'Under 30' ? 'selected' : ''}`}
              onClick={() => setSelectedAge('Under 30')}
            >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/medium-shot-people-training-with-kettlebells_23-2149307721.jpg?ga=GA1.1.1857534666.1690658127&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Under 30</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedAge === 'Above 35' ? 'selected' : ''}`}
              onClick={() => setSelectedAge('Above 35')}
            >
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/group-happy-people-standing-against-wall-gym_23-2147949689.jpg?ga=GA1.1.1857534666.1690658127&semt=ais_hybrid" />
              <Card.Body>
                <Card.Title>Above 35</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Select Price Section */}
      <h3>Select Price</h3>
      <Container>
        <Row className="price-selection justify-content-center">
          <Col md={3}>
            <Card
              className={`selection-card ${selectedPrice === '1 Month' ? 'selected' : ''}`}
              onClick={() => setSelectedPrice('1 Month')}
            >
              <Card.Body>
                <Card.Title>1 Month</Card.Title>
                <Card.Text>
                  Rs: 499/- <br />
                  Using Unlimited Equipments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedPrice === '3 Month' ? 'selected' : ''}`}
              onClick={() => setSelectedPrice('3 Month')}
            >
              <Card.Body>
                <Card.Title>3 Month</Card.Title>
                <Card.Text>
                  Rs: 1500/- <br />
                  Using Unlimited Equipments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedPrice === '6 Month' ? 'selected' : ''}`}
              onClick={() => setSelectedPrice('6 Month')}
            >
              <Card.Body>
                <Card.Title>6 Month</Card.Title>
                <Card.Text>
                  Rs: 3000/- <br />
                  Using Unlimited Equipments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              className={`selection-card ${selectedPrice === '1 Year' ? 'selected' : ''}`}
              onClick={() => setSelectedPrice('1 Year')}
            >
              <Card.Body>
                <Card.Title>1 Year</Card.Title>
                <Card.Text>
                  Rs: 5000/- <br />
                  Using Unlimited Equipments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Proceed Payment Button */}
      <div className="text-center">
        <Button variant="success" disabled={!isProceedEnabled} onClick={handleShowModal}>
          Proceed to Join
        </Button>
      </div>

      {/* Payment Options Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="https://via.placeholder.com/400x150" // Example banner image
            alt="Banner"
            className="img-fluid mb-3"
          />
          <Row>
            <Col>
              <Button variant="primary" className="w-100">
                Get Service Free
              </Button>
            </Col>
            <Col>
              <Button variant="success" className="w-100">
                Pay with UPI
              </Button>
            </Col>
          </Row>
          <div className="mt-4 text-center">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => {
                alert('Booking confirmed! You will pay after the service.');
                handleCloseModal();
              }}
            >
              Pay After Service
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gym;
