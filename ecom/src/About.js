import React from 'react';
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Header />
      <Col xs={12}>
                <div className="background text-white">
                  <Row className="w-100">
                    <Col md={10} xs={12}>
                      <div className="title">
                        About Us
                      </div>
                    </Col>
                    <Col md={2} xs={12}>
                      <div className="breadcrumb">
                        Home | About Us
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
      <Row className="slide-down" style={{ marginTop: '7%', marginLeft: '30px', marginRight: '30px' }}>
  <Col xs={12} sm={12} md={4} className="mb-4">
    <h3 >01. Our Vision</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h3 className="mt-4 ">02. Buyers Protection</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </Col>

  <Col xs={12} sm={12} md={4} className="mb-4">
    <h3 >03. Our Mission</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h3 className="mt-4 ">04. 24 Hour Expert Support</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </Col>

  <Col xs={12} sm={12} md={4} className="mb-4">
    <h3 >05. 20% Extra on Selected Items</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h3 className="mt-4 ">06. No Cost EMI on Credit Card</h3>
    <p className="responsive-text">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </Col>
</Row>

      <Row style={{ marginTop: '10%' }}>
  {/* Left Text Section */}
  <Col xs={12} sm={12} md={4} className="text-center mb-4" style={{ marginTop: '3%' }} data-aos="fade-left" data-aos-duration="2000">
    <h1 style={{ color: 'brown' }} ><i>World's Premium</i></h1>
    <h1 ><i>design brands</i></h1>
    <br />
    <p  className="responsive-text">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.<br /><br />
      Looked up one of the more obscure Latin words “consectetur,” from a passage about word design and birthstones.<br /><br />
      Each birthstone holds history, symbolism, and charm—wearing yours adds a deeply personal touch.
    </p>
  </Col>

  {/* Center Image */}
  <Col xs={12} sm={12} md={4} className="mb-4 text-center">
    <img src={require('./img/n1.png')} alt="Design Brands" style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'cover' }} />
  </Col>

  {/* Right Feature List */}
  <Col xs={12} sm={12} md={4} className="mb-4" style={{ marginTop: '5%' }} data-aos="fade-right" data-aos-duration="2000">
    {/* Feature 1 */}
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }} className="mb-3">
      <FontAwesomeIcon icon={faCloud} className="fs-2 mx-3" style={{ color: 'brown' }} />
      <div>
        <h2 className="responsive-text">Soft Fabric</h2>
        <p >Get complimentary ground shipping on every order. Don’t love it? Send it back.</p>
      </div>
    </div>

    {/* Feature 2 */}
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }} className="mb-3">
      <FontAwesomeIcon icon={faFeather} className="fs-2 mx-3" style={{ color: 'brown' }} />
      <div>
        <h2 className="responsive-text">Feather Light</h2>
        <p className="responsive-text">Experience elegance without weight—our designs are beautifully light and wearable.</p>
      </div>
    </div>

    {/* Feature 3 */}
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      <FontAwesomeIcon icon={faClock} className="fs-2 mx-3" style={{ color: 'brown' }} />
      <div>
        <h2 className="responsive-text">Timeless Craft</h2>
        <p  className="responsive-text">Crafted to last—our jewellery pieces stand the test of time in both style and durability.</p>
      </div>
    </div>
  </Col>
</Row>

      {/* Title Row */}
<Row>
  <Col xs={12} style={{ marginTop: '10%' }}>
    <h1 className="text-center" style={{ color: 'brown' }}>
      <i><b>Who we are?</b></i>
    </h1>
  </Col>
</Row>

{/* Team Members Row */}
<Row className="my-5 px-3">
  <Col xs={12} sm={6} md={3} className="mb-4 text-center">
    <img src={require('./img/m1.png')} alt="Johny Walker" style={{ width: '100%', height: 'auto' }} />
    <h3 className="my-2">Johny Walker</h3>
    <p className="fs-5">Web Designer</p>
  </Col>

  <Col xs={12} sm={6} md={3} className="mb-4 text-center">
    <img src={require('./img/m2.png')} alt="Rebecca Flex" style={{ width: '100%', height: 'auto' }} />
    <h3 className="my-2">Rebecca Flex</h3>
    <p className="fs-5">Support Staff</p>
  </Col>

  <Col xs={12} sm={6} md={3} className="mb-4 text-center">
    <img src={require('./img/m3.png')} alt="Johny Walker" style={{ width: '100%', height: 'auto' }} />
    <h3 className="my-2">Johny Walker</h3>
    <p className="fs-5">Web Designer</p>
  </Col>

  <Col xs={12} sm={6} md={3} className="mb-4 text-center">
    <img src={require('./img/m4.png')} alt="Jahn Ringo" style={{ width: '100%', height: 'auto' }} />
    <h3 className="my-2">Jahn Ringo</h3>
    <p className="fs-5">Deputy Sale</p>
  </Col>
</Row>

    <Footer />
    </div>

  )
}

export default About
