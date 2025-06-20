import React from 'react';
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function Contact() {
  return (
    <div>
        <Header />
        
        <Col xs={12}>
                        <div className="background text-white">
                          <Row className="w-100">
                            <Col md={10} xs={12}>
                              <div className="title">
                                Contact Us
                              </div>
                            </Col>
                            <Col md={2} xs={12}>
                              <div className="breadcrumb">
                                Home | Contact Us
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
      <Container style={{ maxWidth: '1600px' }}>
        <Row style={{ marginTop: '7%' }} className="px-3">
  {/* Phone Number */}
  <Col xs={12} sm={12} md={4} className="mb-4">
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <FontAwesomeIcon icon={faPhone} className="fs-3  s1 " style={{ color: 'brown' }} data-aos="zoom-in" data-aos-delay="0"/>
      <div className="ms-4" data-aos="zoom-in" data-aos-delay="0">
        <h2 className="mb-1 mt-3">Phone Number:</h2>
        <h5>(+01) 0223 6020 020<br />(+01) 2006 0600 6000</h5>
      </div>
    </div>
  </Col>

  {/* Store Address */}
  <Col xs={12} sm={12} md={4} className="mb-4">
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <FontAwesomeIcon icon={faLocationDot} className="fs-3 s1 " style={{ color: 'brown' }} data-aos="zoom-in" data-aos-delay="100"/>
      <div className="ms-4 mt-3" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="mb-1">Store Address:</h2>
        <h5>Akshya Nagar 1st Block 1st<br />Cross, Bangalore - 560016</h5>
      </div>
    </div>
  </Col>

  {/* Customer Email */}
  <Col xs={12} sm={12} md={4} className="mb-4">
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <FontAwesomeIcon icon={faEnvelope} className="fs-3  s1" style={{ color: 'brown' }} data-aos="zoom-in" data-aos-delay="300"/>
      <div className="ms-4" data-aos="zoom-in" data-aos-delay="300">
        <h2 className="mb-1 mt-3">Customer Email:</h2>
        <h5>domainfo@gmail.com<br />info8989@gmail.com</h5>
      </div>
    </div>
  </Col>
</Row>
</Container>
        <Container>
  <Row style={{ marginTop: '10%' }} className="align-items-center px-3">
    {/* Text Section */}
    <Col xs={12} md={6} className="mb-4" style={{ marginTop: '5%' }}>
      <p className="headline1">We would Love to Talk With</p>
      <p className="headline2">Our Great Customer</p>
      <p className="fs-5">
        Give us a call or drop by anytime. We endeavour to answer all enquiries within 24 hours on business days.
        I’ve created a vocabulary of different styles—I draw from many different ways to take a picture.
      </p>
      <button className="b5 custom-btn mt-3"><b>SHOP NOW</b></button>
    </Col>

    {/* Image Section */}
    <Col xs={12} md={6}>
      <img src={require('./img/p10.png')} alt="Customer Service" style={{ width: '100%', height: '600px', maxHeight: '700px', objectFit: 'cover' }} />
    </Col>
  </Row>
</Container>

      <Footer />
    </div>
  )
}

export default Contact
