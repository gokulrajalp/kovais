import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Modal, Carousel } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './barber.css'
import slide1 from './images/s7.jpg'
import slide2 from './images/s8.jpg'
import slide3 from './images/s6.jpg'
import men1 from './images/men1.jpeg'
import men2 from './images/men2.jpeg'
import men3 from './images/men3.jpg'

const TheBoyzPage = () => {
  const [selectedServiceType, setSelectedServiceType] = useState('Saloon')
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
        name: 'Haircut',
        price: 10,
        imageUrl: men1,
      },
      {
        id: 2,
        name: 'Shave',
        price: 5,
        imageUrl: men2,
      },
      {
        id: 3,
        name: 'Hair Coloring',
        price: 15,
        imageUrl: men3,
      },
    ],
    Women: [
      {
        id: 1,
        name: 'Haircut',
        price: 15,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68Ah9lt2bq4EkyVLBYKPKWeVI3YPBkFY-Cw&s',
      },
      { id: 2, name: 'Facial', price: 25, imageUrl: slide2 },
      { id: 3, name: 'Hair Coloring', price: 20, imageUrl: slide3 },
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
            src="https://t4.ftcdn.net/jpg/05/26/31/19/360_F_526311939_DVS9EEQxMkg5NBmMG3tVbLHtUz9pYOuj.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bubblesindia.com/wp-content/uploads/2019/03/Bubbles_Services_Banner_Haircut.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/06/13/54/69/360_F_613546927_mU6uNbcz0UOYtihGtrQMjVHhJqYrqLxz.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Service Type Selection */}
      <Container className="my-4">
  <h3>Service Type Selection</h3>
  <Row className="text-center justify-content-center">
    <Col md={3}>
    <Card
  className="text-center service-card"
  style={{ height: '10%', display: 'flex', flexDirection: 'column' }}
>
  <Card.Img
    variant="top"
    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG9ufGVufDB8fDB8fHww"
    alt="Saloon"
    style={{ flex: '1', objectFit: 'cover' }} // Ensure image fills the card
  />
  <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: selectedServiceType === 'Saloon' ? '#FF4081' : 'transparent',
        color: selectedServiceType === 'Saloon' ? '#fff' : '#000',
        borderColor: selectedServiceType === 'Saloon' ? '#FF4081' : '#000',
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
      onClick={() => setSelectedServiceType('Saloon')}
      className="no-hover"
    >
      Saloon
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpzi9Qik5BfpRZiUkT0oxN4zcurAMD3ZA_w&s"
          alt="Door Step"
        />
        <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: selectedServiceType === 'Door Step' ? '#FF4081' : 'transparent',
        color: selectedServiceType === 'Door Step' ? '#fff' : '#000',
        borderColor: selectedServiceType === 'Door Step' ? '#FF4081' : '#000',
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
      onClick={() => setSelectedServiceType('Door Step')}
    >
      Door Step
    </Button>
  </Card.Body>
      </Card>
    </Col>
  </Row>

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
          src="https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg"
          alt="Men"
        />
        <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: setSelectedGender === 'Men' ? '#FF4081' : 'transparent',
        color: setSelectedGender === 'Men' ? '#fff' : '#000',
        borderColor: setSelectedGender === 'Men' ? '#FF4081' : '#000',
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
          src="https://img.freepik.com/free-photo/beautiful-woman-getting-her-hair-cut-home-by-hairdresser_23-2148817217.jpg"
          alt="Women"
        />
        <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: setSelectedGender === 'Women' ? '#FF4081' : 'transparent',
        color: setSelectedGender === 'Women' ? '#fff' : '#000',
        borderColor: setSelectedGender === 'Women' ? '#FF4081' : '#000',
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
    <Col md={3}>
      <Card
        className="text-center service-card"
        style={{ height: '30%', display: 'flex', flexDirection: 'column' }}
      >
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/825461082/photo/5-year-old-getting-a-haircut.jpg?s=612x612&w=0&k=20&c=ax37u3ZD2p7odcIyhTO82hqww5lJ8fOAUJXsUVP2Ag8="
          alt="Kids"
        />
       <Card.Body style={{ padding: 0, marginTop: 'auto' }}>
    <Button
      style={{
        backgroundColor: setSelectedGender === 'Kids' ? '#FF4081' : 'transparent',
        color: setSelectedGender === 'Kids' ? '#fff' : '#000',
        borderColor: setSelectedGender === 'Kids' ? '#FF4081' : '#000',
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
      onClick={() => setSelectedGender('Kids')}
    >
      Kids
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
                        ? '#FF4081'
                        : selectedTime === slot
                        ? '#FF4081'
                        : 'transparent',
                      color: selectedTime === slot ? '#fff' : '#000',
                      borderColor: selectedTime === slot ? '#FF4081' : 'black',
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