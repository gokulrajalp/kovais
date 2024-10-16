import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomSearch.css';
import { Container, Row, Col, Card, Button, Form,Carousel } from 'react-bootstrap';

const RoomSearch = () => {
  const navigate = useNavigate();

  // Handle the search button click and navigate to the search results page
  const handleSearchClick = () => {
    navigate('/search-results');
  };

  return (
    <Container fluid className="hotel-container">
      {/* Search Form Section */}
      <div className="search-section">
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
        <Form className="search-form">
          <Row className=" justify-content-center">
            {/* City, Property name or Location input */}
            {/* <Col md={3}>
              <Form.Group>
                <Form.Label>City, Property name or Location</Form.Label>
                <Form.Control type="text" placeholder="Gobichettipalayam, Erode India" />
              </Form.Group>
            </Col> */}
            
            {/* Check-In date input */}
            {/* <Col md={2}>
              <Form.Group>
                <Form.Label>Check-In</Form.Label>
                <Form.Control type="date" defaultValue="2024-10-08" />
              </Form.Group>
            </Col> */}
            
            {/* Check-Out date input */}
            {/* <Col md={2}>
              <Form.Group>
                <Form.Label>Check-Out</Form.Label>
                <Form.Control type="date" defaultValue="2024-10-09" />
              </Form.Group>
            </Col> */}
            
            {/* Rooms & Guests selection */}
            {/* <Col md={2}>
              <Form.Group>
                <Form.Label>Rooms & Guests</Form.Label>
                <Form.Control as="select" defaultValue="1 Room 2 Adults">
                  <option>1 Room 1 Adult</option>
                  <option>1 Room 2 Adults</option>
                  <option>2 Rooms 4 Adults</option>
                </Form.Control>
              </Form.Group>
            </Col> */}

            {/* Search Button */}
            <Col md={2} className="text-center">
              <Button variant="primary" className="search-btn" onClick={handleSearchClick}>
                Search for Booking
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Types of Rooms Section */}
      <h4 className="mt-4 text-center">Types of Rooms</h4>
      <Row className="room-visuals justify-content-center">
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://www.nayada.com/files/nodus_items/0001/0606/attaches/news-2690-1.jpg" />
            <Card.Body>
              <Card.Title>Deluxe Room</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iAairnoKlUtzru7KeK4iSnbjkGCz8UAiEQ&s" />
            <Card.Body>
              <Card.Title>Super Deluxe Room</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://cityhotels.ge/modules/conference_halls/uploads/jpg/step_1/167.jpg" />
            <Card.Body>
              <Card.Title>Premium Room</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Room Visuals Section */}
      <h4 className="mt-4">Room Hire Visuals</h4>
      <Row className="room-visuals">
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iAairnoKlUtzru7KeK4iSnbjkGCz8UAiEQ&s" />
            <Card.Body>
              <Card.Title>Rooms</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://www.hospitalitynet.org/picture/xxl_153086941.jpg?t=1519120957" />
            <Card.Body>
              <Card.Title>Entrance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://cnyglock.com/wp-content/uploads/2023/04/%E6%9C%AA%E6%A0%87%E9%A2%98-2-3.jpg" />
            <Card.Body>
              <Card.Title>Reception</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://www.nayada.com/files/nodus_items/0001/0606/attaches/news-2690-1.jpg" />
            <Card.Body>
              <Card.Title>Common Area</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iAairnoKlUtzru7KeK4iSnbjkGCz8UAiEQ&s" />
            <Card.Body>
              <Card.Title>Restaurant</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src="https://cityhotels.ge/modules/conference_halls/uploads/jpg/step_1/167.jpg" />
            <Card.Body>
              <Card.Title>Conference Room</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomSearch;
