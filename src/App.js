import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap here
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
import img1 from './img/img (1).jpeg'
import img2 from './img/img (2).jpeg'
import img3 from './img/img (3).jpeg'
import img4 from './img/img (4).jpeg'
import logo from './img/logo.jpg'
import profile from './img/pros4.jpg'
import spa from './img/spa.avif'
import Barber from './barber/barber'
import Spa from './spa/spa'
import Hotel from './RoomSearch/RoomSearch'
import SearchResults from './RoomSearch/SearchResults';  // You'll create this for showing results
import Gym from './gym/gym';


// import About from './About'

//import Spa from './beaut spa/Spa'
// import Subscr from './comp/subscr'



// Loading Component
const Loading = () => (
  <div className="loading">
    <div className="loader"></div>
    <h2>Loading...</h2>
  </div>
)

// Header Component
const Header = ({ onLoginClick, user, onLogout }) => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="company-name">THE BOYZ</span>
    </div>
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Booking</Link>
        {user ? (
          <ProfileContainer user={user} onLogout={onLogout} />
        ) : (
          <button className="login-button" onClick={onLoginClick}>
            Get Started
          </button>
        )}
      </nav>
    </div>
  </header>
)

// ProfileContainer Component
const ProfileContainer = ({ user, onLogout }) => (
  <div className=''>
    <div className="profile-container">
      <div className="profile-bar">
        <div className="profile-info">
          <img
            src={user.avatar || profile}
            alt="User Avatar"
            className="user-avatar"
          />
          <span className="username">{user.username}</span>
        </div>
        {/* <nav className="profile-nav">
          <Link to="#">Gym</Link>
          <Link to="#">Spa</Link>
          <Link to="#">Barber Shop</Link>
         
        </nav> */}
        <button className="profile-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  </div>
)

// Login Popup Component
const LoginPopup = ({ isOpen, onClose, onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleToggle = () => {
    setIsSignIn(!isSignIn)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Call the onLogin prop with the username
    onLogin({ username, avatar: '' }) // You can add avatar URL here if needed
    onClose()
  }

  return isOpen ? (
    <div className="login-popup">
      <div className="login-card">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <button onClick={handleToggle} className="toggle-button mt-4 ">
          {isSignIn
            ? 'Need an account? Sign Up'
            : 'Already have an account? Sign In'}
        </button>
      </div>
    </div>
  ) : null
}

// MainContent Component (Replacing with new TheBoyz component)
const MainContent = () => (
  <>

    {/* Hero Section */}
    <section className="text-center p-5 text-light hero">
      <Container className="pt-5">
        <h1 className="hero-header">
          <span className="span-text">
            <b>Tamil Nadu's</b>
          </span>{' '}
          <b className="text-white">Number 1</b>
          <br />{' '}
          <span className="span-text">
            <b>Luxury & Wellness Destination</b>
          </span>
        </h1>
        <p className="hero-para">
          Welcome to THE BOYZ, Tamil Nadu's leading luxury and wellness
          destination, offering a range of premium services, including hotel
          stays, spa & beauty treatments, barber shop grooming, and a
          state-of-the-art gym. Pre-book your experience and enjoy world-class
          services designed for your comfort and style!
        </p>
      </Container>
    </section>

    {/* Services Section */}
    <section className="text-center my-5 mx-2">
      <Container>
        <h2 className="mb-4">
          <b>
            Our <span className="text-danger font-weight-bold">Services</span>
          </b>
        </h2>
        <Row className="mt-4">
          <Col md={3}>
            <Card className="mb-4 h-auto hover-effect">
              <Card.Img variant="top" src={img1} alt="Hotel Service" />
              <Card.Body>
                <Card.Title>
                  <b>Hotel</b>
                </Card.Title>
                <Card.Text className="text-black">
                  Book your stay for experience of luxury and comfort.
                </Card.Text>
                <Link to="/RoomSearch">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 h-auto hover-effect">
              <Card.Img variant="top" src={img2} alt="spa Service" />
              <Card.Body>
                <Card.Title>
                  <b>Spa</b>
                </Card.Title>
                <Card.Text className="text-black">
                  Elevate your fitness journey. Pre-book your session today.
                </Card.Text>
                <Link to="/spa">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 h-auto hover-effect">
              <Card.Img variant="top" src={img4} alt="Gym Service" />
              <Card.Body>
                <Card.Title>
                  <b>Gym</b>
                </Card.Title>
                <Card.Text className="text-black">
                  Get the perfect fit at our gym. Pre-book your session now.
                </Card.Text>
                <Link to="/gym">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4 h-auto hover-effect">
              <Card.Img variant="top" src={img3} alt="Barber Service" />
              <Card.Body>
                <Card.Title>
                  <b>Barber</b>
                </Card.Title>
                <Card.Text className="text-black">
                  Elevate your fitness journey. Pre-book your session today.
                </Card.Text>
                <Link to="/barber">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Why Choose Us Section */}
    <section className="text-center bg-light p-5">
      <Container>
        <h2>
          <b>
            Why Choose <span className="text-danger">Us</span>?
          </b>
        </h2>
        <p className="hero-para">
          At THE BOYZ, we offer exceptional service, unmatched luxury, and
          personalized experiences. From our premium hotel stays to world-class
          grooming, spa, and fitness facilities, we prioritize your comfort,
          style, and well-being. Choose us for a seamless blend of relaxation,
          refinement, and rejuvenation.
        </p>
      </Container>
    </section>

    {/* Footer */}
    <footer className="bg-dark text-light text-center p-4">
      <Container>
        {/* <p>&copy; 2024 THE BOYZ. All Rights Reserved.</p> */}
        <p>
          Contact Us: <br /> Phone: 9234567891 | Email: info@theboyz.com
        </p>
       
      </Container>
    </footer>
  </>
)

// App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleLoginClick = () => {
    setIsLoginOpen(true)
  }

  const handleLogin = (userInfo) => {
    setUser(userInfo)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleLoginClose = () => {
    setIsLoginOpen(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simulate a loading time of 2 seconds
  }, [])

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header
              onLoginClick={handleLoginClick}
              user={user}
              onLogout={handleLogout}
            />
            <LoginPopup
              isOpen={isLoginOpen}
              onClose={handleLoginClose}
              onLogin={handleLogin}
            />
            <Routes>
              <Route path="/barber" element={<Barber />} />
              <Route path="/spa" element={<Spa />}/>
              <Route path="/RoomSearch" element={<Hotel />}/>
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/gym" element={<Gym />} />
             
              {/* <Route path="#" element={<About />} />
              <Route path="#" element={<Spa />} />
              <Route path="#" element={<Hotel />} />
              <Route path="#" element={<Subscr />} /> */}
              {/* Replace the default route with the new MainContent */}
              <Route path="/" element={<MainContent />} />
              
            </Routes>
            
          </>
        )}
      </div>
    </Router>
  )
}
export default App