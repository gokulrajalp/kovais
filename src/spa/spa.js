import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Modal, Carousel } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './spa.css'
import slide1 from './images/s7.jpg'
import slide2 from './images/s8.jpg'
import slide3 from './images/s6.jpg'
import men1 from './images/men1.jpeg'
import spaimg from './images/spa.jpg'
import spa1 from './images/spas.webp'

const TheBoyzPage = () => {
 
  const [selectedGender, setSelectedGender] = useState('Men')
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookedSlots, setBookedSlots] = useState({})
  const [showModal, setShowModal] = useState(false)

  const services = {
    Men: [
      {
        id: 1,
        name: 'Swedish Massage',
        price: 10,
        imageUrl: spaimg,
      },
      {
        id: 2,
        name: 'Aromatherapy Massage',
        price: 5,
        imageUrl: spaimg,
      },
      {
        id: 3,
        name: 'Thai Massage',
        price: 15,
        imageUrl: spaimg,
      },
    ],
    Women: [
      {
        id: 1,
        name: 'Swedish Massage',
        price: 15,
        imageUrl:spaimg,
      },
      { 
        id: 2, 
        name: 'Aromatherapy Massage', 
        price: 25, 
        imageUrl: spaimg,
      },
      { 
        id: 3, 
        name: 'Thai Massage',
        price: 20, 
        imageUrl: spaimg,
      },
    ],
    Kids: [
      {
        id: 1,
        name: 'Kids Haircut',
        price: 8,
        imageUrl:
          'https://images.pexels.com/photos/7697358/pexels-photo-7697358.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ],
  }

  useEffect(() => {
    if (
      !selectedService ||
      !services[selectedGender].some(
        (service) => service.id === selectedService.id
      )
    ) {
      setSelectedService(services[selectedGender][0])
    }
  }, [selectedGender, services])

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ]

  const isSlotBooked = (slot) => {
    const dateKey = selectedDate.toDateString()
    return bookedSlots[dateKey]?.includes(slot)
  }

  const handleSelectService = (service) => {
    setSelectedService(service)
  }

  const handleSelectSlot = (slot) => {
    const dateKey = selectedDate.toDateString()

    if (selectedTime === slot) {
      setSelectedTime(null)
      setBookedSlots((prev) => ({
        ...prev,
        [dateKey]:
          prev[dateKey]?.filter((bookedSlot) => bookedSlot !== slot) || [],
      }))
    } else {
      setSelectedTime(slot)
      setBookedSlots((prev) => ({
        ...prev,
        [dateKey]: [slot],
      }))
    }
  }

  const handlePayment = () => {
    if (selectedService && selectedTime) {
      setShowModal(true)
    } else {
      alert('Please select a service and a time slot.')
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedService(null)
    setSelectedTime(null)
  }

  return (
    <div className="the-boyz-page">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/05/84/54/21/360_F_584542180_g0z0wDaZk7jTA8W5wtBgMJd9tOaP2uCD.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/05/26/31/19/360_F_526311939_DVS9EEQxMkg5NBmMG3tVbLHtUz9pYOuj.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Service Type Selection */}
      <Container className="my-4">
  

  {/* Gender Selection */}
  <h3>Gender Selection</h3>
  <Row className="text-center my-3 justify-content-center">
    <Col md={3}>
      <Card
        className="text-center service-card"
        style={{ height: '30%', display: 'flex', flexDirection: 'column' }}
      >
        <Card.Img
          variant="top"
          src="https://img.freepik.com/photos-premium/spa-tranquille-fleurs-jasmin-serviettes-pierres-table-blanche-bois_1255146-5052.jpg"
          alt="Men"
        />
        <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: setSelectedGender === 'Men' ? 'gray' : 'transparent',
        color: setSelectedGender === 'Men' ? '#fff' : '#000',
        borderColor: setSelectedGender === 'Men' ? 'gray' : '#000',
        padding: '10px 0', // Adjusted padding
        fontSize: '18px', // Adjusted font size
        width: '100%', // Full-width button
        height: '50px', // Adjust button height
        borderRadius: '0 0 15px 15px', // Rounded only at the bottom
        borderTop: 'none', // Remove border from the top if needed
        boxShadow: 'none', // No hover shadow
        transition: 'none', // Disable hover transition
        display: 'block',
        textAlign: 'center',
      }}
      onClick={() => setSelectedGender('Men')}
    >
      Men
    </Button>
  </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card
        className="text-center service-card"
        style={{ height: '30%', display: 'flex', flexDirection: 'column' }}
      >
        <Card.Img
          variant="top"
          src="https://img.freepik.com/photos-premium/spa-tranquille-fleurs-jasmin-serviettes-pierres-table-blanche-bois_1255146-5052.jpg"
          alt="Women"
        />
        <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: setSelectedGender === 'Women' ? 'gray' : 'transparent',
        color: setSelectedGender === 'Women' ? '#fff' : '#000',
        borderColor: setSelectedGender === 'Women' ? 'gray' : '#000',
        padding: '10px 0', // Adjusted padding
        fontSize: '18px', // Adjusted font size
        width: '100%', // Full-width button
        height: '50px', // Adjust button height
        borderRadius: '0 0 15px 15px', // Rounded only at the bottom
        borderTop: 'none', // Remove border from the top if needed
        boxShadow: 'none', // No hover shadow
        transition: 'none', // Disable hover transition
        display: 'block',
        textAlign: 'center',
      }}
      onClick={() => setSelectedGender('Women')}
    >
      Women
    </Button>
  </Card.Body>
      </Card>
    </Col>
    
  </Row>
</Container>



      {/* Service Selection */}
      <Container className="my-4 py-4 px-4">
        <h3 className="text-center">Services for {selectedGender}</h3>
        <Row>
          {services[selectedGender].map((service) => (
            <Col md={4} key={service.id}>
              <Card
                className={`service-card ${
                  selectedService?.id === service.id ? 'selected' : ''
                }`}
                onClick={() => handleSelectService(service)}
              >
                <Card.Img variant="top" src={service.imageUrl} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-4">
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="form-control"
              inline
            />
          </Col>

          <Col md={6}>
            <h4 className="text-center mb-4">Available Time Slots</h4>
            <Row className="text-center">
              {timeSlots.map((slot) => (
                <Col key={slot} md={4} className="my-2">
                  <Button
                    style={{
                      backgroundColor: isSlotBooked(slot)
                        ? 'gray'
                        : selectedTime === slot
                        ? 'gray'
                        : 'transparent',
                      color: selectedTime === slot ? '#fff' : '#000',
                      borderColor: selectedTime === slot ? 'gray' : 'black',
                      width: '100%',
                      transition:
                        'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
                    }}
                    onClick={() => handleSelectSlot(slot)}
                    disabled={isSlotBooked(slot)}
                  >
                    {slot}
                  </Button>
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-end mt-5">
              <Button
                variant="success"
                onClick={handlePayment}
                disabled={!selectedTime}
                className="position-fixed bottom-0 end-0 m-4"
              >
                Proceed to Payment
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal Popup for Payment Options */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={slide1} // Example banner image
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
            {/* "Pay After Service" now as a button */}
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => {
                // Handle confirm booking here
                alert('Booking confirmed! You will pay after the service.')
                handleCloseModal() // Close modal after booking confirmation
              }}
            >
              Pay After Service
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default TheBoyzPage
