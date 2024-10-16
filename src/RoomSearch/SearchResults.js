import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal,Carousel} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const { location: city, checkInDate, checkOutDate, guestsInfo } = location.state || {};

  const [selectedRoomType, setSelectedRoomType] = useState('All');
  const [roomCounts, setRoomCounts] = useState([1, 1, 1]); // Initialize counts for three room types
  const [guestCounts, setGuestCounts] = useState([1, 1, 1]); // Initialize guest counts for three room types
  const [showModal, setShowModal] = useState(false); // Modal state to control its visibility

  const rooms = [
    {
      id: 1,
      type: 'Delux Room',
      title: 'Delux Room',
      description: 'A luxurious delux room with stunning views and modern amenities.',
      price: '₹2,591',
      originalPrice: '₹4,000',
      taxes: '₹788 taxes & fees',
      rating: '3.7 Very Good',
      location: 'Panjim, Goa',
      imgSrc: 'https://www.dreaminternationalhotel.com/images/subpackage/0NNhP-sd2.jpg',
      amenities: ['Restaurant', 'Intercom', 'Room Service', 'Power Backup'],
    },
    {
      id: 2,
      type: 'Super Delux Room',
      title: 'Super Delux Room',
      description: 'Experience ultimate comfort in our super delux room.',
      price: '₹3,200',
      originalPrice: '₹5,000',
      taxes: '₹900 taxes & fees',
      rating: '4.1 Excellent',
      location: 'Panjim, Goa',
      imgSrc: 'https://jcresidency.com/jc_kodai/images/rooms/super-deluxe-room-1.jpg',
      amenities: ['Restaurant', 'Intercom', 'Room Service', 'WiFi'],
    },
    {
      id: 3,
      type: 'Premium Room',
      title: 'Premium Room',
      description: 'Enjoy a premium experience with top-notch facilities and service.',
      price: '₹4,000',
      originalPrice: '₹6,000',
      taxes: '₹1,000 taxes & fees',
      rating: '4.5 Outstanding',
      location: 'Panjim, Goa',
      imgSrc: 'https://royalmhotels.com/uploads/rooms_types/gallery/1170x780/premium.jpg',
      amenities: ['Restaurant', 'Pool', 'Gym', 'WiFi'],
    },
  ];

  const maxGuestsPerRoom = 3;

  const handleRoomSelectChange = (e) => {
    const selectedValue = e.target.value;
    const [roomsSelected] = selectedValue.split(' ').map(Number); // Extract the number of rooms

    // Set room counts for all room types to the selected value
    const updatedRoomCounts = Array(rooms.length).fill(roomsSelected);
    setRoomCounts(updatedRoomCounts);

    // Set guest counts based on the new room counts
    const updatedGuestCounts = updatedRoomCounts.map(count => Math.min(count * maxGuestsPerRoom, 3));
    setGuestCounts(updatedGuestCounts);
  };

  useEffect(() => {
    // Initialize guest counts based on the initial room counts
    const initialGuestCounts = roomCounts.map(count => Math.min(count * maxGuestsPerRoom, 3));
    setGuestCounts(initialGuestCounts);
  }, [roomCounts]); // Recalculate when roomCounts changes

  // Increment room count for a specific room type
  const incrementRoom = (index) => {
    const updatedCounts = [...roomCounts];
    updatedCounts[index] += 1;
    setRoomCounts(updatedCounts);

    // Adjust guest count if it's lower than the room capacity
    const updatedGuests = [...guestCounts];
    const maxGuests = updatedCounts[index] * maxGuestsPerRoom;
    if (updatedGuests[index] < maxGuests) {
      updatedGuests[index] = Math.min(maxGuests, updatedGuests[index] + 1);
    }
    setGuestCounts(updatedGuests);
  };

  // Decrement room count for a specific room type
  const decrementRoom = (index) => {
    const updatedCounts = [...roomCounts];
    if (updatedCounts[index] > 1) {
      updatedCounts[index] -= 1;
    }
    setRoomCounts(updatedCounts);

    // Adjust guest count if it exceeds the new room capacity
    const updatedGuests = [...guestCounts];
    const maxGuests = updatedCounts[index] * maxGuestsPerRoom;
    if (updatedGuests[index] > maxGuests) {
      updatedGuests[index] = Math.min(updatedGuests[index], maxGuests);
    }
    setGuestCounts(updatedGuests);
  };

  // Increment guest count for a specific room type
  const incrementGuest = (index) => {
    const updatedGuests = [...guestCounts];
    const maxGuests = roomCounts[index] * maxGuestsPerRoom;
    if (updatedGuests[index] < maxGuests) {
      updatedGuests[index] += 1;
    }
    setGuestCounts(updatedGuests);
  };

  // Decrement guest count for a specific room type
  const decrementGuest = (index) => {
    const updatedGuests = [...guestCounts];
    if (updatedGuests[index] > 1) {
      updatedGuests[index] -= 1;
    }
    setGuestCounts(updatedGuests);
  };

  const filteredRooms = selectedRoomType === 'All'
    ? rooms
    : rooms.filter(room => room.type === selectedRoomType);

  // Function to show the modal when "Book Now" is clicked
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="hotel-container">
      {/* Search Header */}
      <div className="search-results-header" >
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://d2gsigjpujdc9o.cloudfront.net/images/unit_page_images/1727347505_Jaipur-Bl-unit-banner-updated09.webp" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Row className="align-items-center justify-content-center">
          <Col md={3} >
            <Form.Group>
              <Form.Label>City, Property name or Location</Form.Label>
              <Form.Control type="text" placeholder="Gobichettipalayam, Erode India" />
            </Form.Group>
          </Col>
          <Col md={2} >
            <Form.Group>
              <Form.Label>Check-In</Form.Label>
              <Form.Control type="date" defaultValue="2024-10-08" />
            </Form.Group>
          </Col>
          <Col md={2} >
            <Form.Group>
              <Form.Label>Check-Out</Form.Label>
              <Form.Control type="date" defaultValue="2024-10-09" />
            </Form.Group>
          </Col>
          <Col md={2} >
            <Form.Group>
              <Form.Label>Rooms & Guests</Form.Label>
              <Form.Control as="select" value={`${roomCounts[0]} Room ${guestCounts[0]} Guests`} onChange={handleRoomSelectChange}>
                <option>1 Room 1 Adult</option>
                <option>1 Room 2 Adults</option>
                <option>2 Rooms 4 Adults</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Types of Room</Form.Label>
              <Form.Control
                as="select"
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Delux Room">Delux Room</option>
                <option value="Super Delux Room">Super Delux Room</option>
                <option value="Premium Room">Premium Room</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* <Col md={2} className="text-center">
            <Button variant="primary">Modify Search</Button>
          </Col> */}
        </Row>
      </div>

      {/* Search Results Content */}
      <div className="search-results-content" style={{ padding: '20px' }}>
        <h2>Search Results</h2>
        <Row>
          {filteredRooms.map((room, index) => (
            <Col md={12} key={room.id}>
              <Card className="mb-4 shadow-sm">
                <Row>
                  <Col md={4}>
                    {/* Room Image */}
                    <Card.Img variant="top" src={room.imgSrc} alt={room.title} className="img-fluid" />
                  </Col>
                  <Col md={8}>
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="mb-3">{room.title}</Card.Title>
                        <Card.Text>{room.description}</Card.Text>

                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            {/* Price, Original Price, and Taxes */}
                            <h4 className="text-primary d-inline-block mb-2">{room.price}</h4>
                            <small className="text-muted d-inline-block ms-2">
                              <del>{room.originalPrice}</del> {room.taxes}
                            </small>
                          </div>
                          <div>
                            {/* Rating and Location */}
                            <span className="badge bg-success">{room.rating}</span>
                            <span className="text-muted ms-2">{room.location}</span>
                          </div>
                        </div>

                        <p className="text-muted mb-2">Amenities: {room.amenities.join(', ')}</p>
                      </div>
                    </Card.Body>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div>
                        {/* Room Count Control */}
                        <Button variant="outline-secondary" onClick={() => decrementRoom(index)}>-</Button>
                        <span className="room-count mx-2">{roomCounts[index]}</span>
                        <Button variant="outline-secondary" onClick={() => incrementRoom(index)}>+</Button>
                        <span className="d-block mt-1 text-center">Room Count</span> {/* Room Count Label */}
                      </div>

                      <div>
                        {/* Guest Count Control */}
                        <Button variant="outline-secondary" onClick={() => decrementGuest(index)}>-</Button>
                        <span className="guest-count mx-2">{guestCounts[index]}</span>
                        <Button variant="outline-secondary" onClick={() => incrementGuest(index)}>+</Button>
                        <span className="d-block mt-1 text-center">Guest Count</span> {/* Guest Count Label */}
                      </div>

                      <Button variant="primary" className="shift-left" onClick={handleShowModal}>
                        Book Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal Component */}
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
    </Container>
  );
};

export default SearchResults;
