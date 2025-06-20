import React from 'react';
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';


// import { Button } from 'bootstrap';


function Home() {
  return (
    <div>
      <Header />

      <Carousel data-bs-theme="dark" controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./img/j1.png')}
            alt="First slide"
            style={{ height: '700px' }}
          />
          <Carousel.Caption className="text-left cus" >
            <h3 className="carousel-subtitle" style={{ fontFamily: 'revert-layer' }}><i>Fine Jewellery</i></h3>
            <p className="carousel-title">IT'S GIFT FOR <br />SOMEONE SPECIAL</p>
            <h5 className="carousel-subtitle">Looked up one of the more obscure Latin words, consectetur,<br />from a lorem ipsum passage.</h5>
            <br />
            <button className="button">SHOP NOW</button>
            <button className="b1">VIEW MORE</button>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./img/j2.png')}
            alt="Second slide"
            style={{ height: '700px' }}
          />
          <Carousel.Caption className="text-center cus-left ">
            {/* <div classname="af"> */}
            <h3 className="carousel-subtitle" style={{ fontFamily: 'revert-layer' }}><i>Fine the idealgift</i></h3>
            <p className="carousel-title">JEWELLERY WITH <br></br>A MODERN TWIST</p>
            <h5 className="carousel-subtitle">Looked up one of the more obscure latin words, consectetur, <br></br>from a lorem
              ipsum passage, and going through the cites of the word.</h5><br></br>
            <button className='button'>SHOP NOW</button>
            <button className='b1'>VIEW MORE</button>
            {/* </div> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container style={{ maxWidth: '1600px' }}>
        <Row className="justify-content-center mt-5 mb-4">
          <Col xs={12} className="text-center">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center px-3">
              <hr className="flex-grow-1" style={{ borderTop: '2px solid black' }} />
              <span
                className="ms-md-3 mt-3 mt-md-0"
                style={{ whiteSpace: 'nowrap', fontSize: '2.2rem', fontWeight: '600' }}
              >
                Discover Our Categories
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ maxWidth: '1600px' }}>
        <Row className="g-4 mt-5">
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="zoom-container">
              <img src={require('./img/c1.jpg')} className="zoom-img img-fluid" alt="Necklaces" />
            </div>
            <h2 className="mt-2">Necklaces</h2>
          </Col>

          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="zoom-container">
              <img src={require('./img/c2.jpg')} className="zoom-img img-fluid" alt="Bracelets" />
            </div>
            <h2 className="mt-2">Bracelets</h2>
          </Col>

          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="zoom-container">
              <img src={require('./img/c3.jpg')} className="zoom-img img-fluid" alt="Earrings" />
            </div>
            <h2 className="mt-2">Earrings</h2>
          </Col>

          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="zoom-container">
              <img src={require('./img/c4.jpg')} className="zoom-img img-fluid" alt="Rings" />
            </div>
            <h2 className="mt-2">Rings</h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6} style={{ paddingTop: '100px' }} data-aos="fade-right" data-aos-duration="3000">
            <div className='image-container1 '>
              <div className='img-1'>
                <img src={require('./img/c6.jpg')} style={{ width: '90%', height: '80%' }}></img>
              </div>
              <div>
                <img src={require('./img/c5.jpg')} style={{ width: '80%', height: '80%' }}></img>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} style={{ marginTop: '15%' }} data-aos="fade-left" data-aos-duration="2000">
            <p
              className="responsive-title"
            >
              <b><i>Sparkle Every Day</i></b>
            </p>
            <h5
              className="responsive-paragraph"
            >
              "In jewellery, sparkle every day — not just with what you wear, but with how you carry yourself.
              Every piece tells a story, adds a shimmer of confidence, and becomes a reflection of your unique
              beauty. Because elegance isn’t reserved for special occasions — it belongs in every moment."
            </h5>
            <button className="b3 my-4">Shop Collection</button>
          </Col>

        </Row>
        {/* <Col xs={12} md={9} style={{ marginTop: '10%' }}>
          { <div
            style={{
              display: 'flex',
              gap: '60px',
              flexWrap: 'wrap',       
              justifyContent: 'center', 
            }} } */}


        <h1 className="h1-responsive"><i>Just New Arrivals</i></h1>
        <Row className="align-items-center my-5 text-center text-md-start">
          <Col xs={12} md={4}>
            <span className="section-title">Discover Our Categories</span>
          </Col>
          <Col xs={12} md={8}>
            <hr className="section-divider" />
          </Col>
        </Row>

        <Row style={{ marginTop: '4%' }}>
          <Col xs={12} sm={6} md={3}>
            <div className="image-hover-wrapper">
              <img src={require('./img/p1.jpg')} className="main-img" alt="Main" />
              <img src={require('./img/p1h.jpg')} className="hover-img" alt="Hover" />
            </div>
            <h2>Gold T-Bar Stud Earrings</h2>
            <h4 style={{ color: 'orangered' }}>$899.99</h4>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className="image-hover-wrapper">
              <img src={require('./img/p2.jpg')} className="main-img" alt="Main" />
              <img src={require('./img/p2h.jpg')} className="hover-img" alt="Hover" />
            </div>
            <h2>Silver Huggie Earrings</h2>
            <h4 style={{ color: 'orangered' }}>$899.99</h4>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className="image-hover-wrapper">
              <img src={require('./img/p3.jpg')} className="main-img" alt="Main" />
              <img src={require('./img/p3h.jpg')} className="hover-img" alt="Hover" />
            </div>
            <h2>Gold Belcher Chain</h2>
            <h4 style={{ color: 'orangered' }}>$569.99</h4>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <div className="image-hover-wrapper">
              <img src={require('./img/p4.jpg')} className="main-img" alt="Main" />
              <img src={require('./img/p4h.jpg')} className="hover-img" alt="Hover" />
            </div>
            <h2>Silver Eternity Stud Earrings</h2>
            <h4 style={{ color: 'orangered' }}>$569.99</h4>
          </Col>
        </Row>

      </Container>
      <Container>
        <Row className="align-items-center my-5 text-center text-md-start">
          <Col xs={12} md={4}>
            <span className="section-title">Discover Our Categories</span>
          </Col>
          <Col xs={12} md={8}>
            <hr className="section-divider" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: '4%' }}>
          <Col xs={12} md={4}>
            <img src={require('./img/p5.jpg')} style={{ width: '100%', height: '600px' }}></img>
          </Col>

          <Col xs={12} md={4}>
            <img src={require('./img/p6.jpg')} style={{ width: '100%', height: '290px' }}></img>

            <img src={require('./img/p7.jpg')} style={{ width: '100%', height: '290px', marginTop: '20px' }} ></img>
          </Col>
          <Col xs={12} md={4}>
            <img src={require('./img/p8.jpg')} style={{ width: '100%', height: '600px' }}></img>
          </Col>
        </Row>
        {/* <Row style={{ marginTop: '4%' }} >
          <Col className="text-center">
            <FontAwesomeIcon icon={faGem} className='fs-1  ic mx-3 text-center' />
          </Col>
        </Row> */}
        <Row className="justify-content-center" style={{ marginTop: '10%' }}>
          <Col xs="auto" className="text-center" data-aos="fade-down" data-aos-duration="2000">
            <img
              src={require('./img/p9.jpeg')}
              alt="Centered"
              style={{ width: '100px', height: '110px' }}
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col xs={12} className="text-center px-3" data-aos="fade-down" data-aos-duration="2000">
            <p className="feature-text">
              Your jewelry pieces stand out for their intricate design and<br />
              timeless elegance. Each piece embodies sophistication,<br />
              making them perfect for our features.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="feature-logo-row">
              <img src={require('./img/f1.png')} alt="Logo 1" className="feature-logo" />
              <img src={require('./img/f2.png')} alt="Logo 2" className="feature-logo" />
              <img src={require('./img/f3.png')} alt="Logo 3" className="feature-logo" />
            </div>
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>

  )
}

export default Home
