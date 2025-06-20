import React from 'react'
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import './Blog.css';

function Blog() {
  return (
    <div>
        <Header />
        <Col xs={12}>
          <div className="background text-white">
            <Row className="w-100">
              <Col md={10} xs={12}>
                <div className="title">
                  Blog
                </div>
              </Col>
              <Col md={2} xs={12}>
                <div className="breadcrumb">
                  Home | Blog
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      <Container style={{ maxWidth: '1600px' }}>
      <Row className="g-4 mt-5">

        {/* Post 1 */}
        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Diamonds in the Library</p>
              <p style={{ color: 'gray' }}>
                Jewellery tells a story that transcends time and trends. Whether classic gold or dazzling diamonds, it’s always in style.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k1.png')}
                alt="k1"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        {/* Post 2 */}
        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>The Jewellery Loupe</p>
              <p style={{ color: 'gray' }}>
               Who says sparkle is only for special occasions? Elevate your daily look with subtle, stunning jewellery pieces.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k2.png')}
                alt="k2"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        {/* Repeat structure for posts 3 to 8 */}
        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>06 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>We make sparkly magic happen</p>
              <p style={{ color: 'gray' }}>
                LEach birthstone holds history, symbolism, and charm. Wearing yours adds a deeply personal touch to your style.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k3.png')}
                alt="k3"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>06 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Jewelry for the free-spirited you</p>
              <p style={{ color: 'gray' }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo...
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k4.png')}
                alt="k4"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Diamonds in the Library</p>
              <p style={{ color: 'gray' }}>
                Your big day deserves brilliance. From heirloom pieces to custom sets, bridal jewellery seals the moment in sparkle.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k5.png')}
                alt="k5"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Diamonds in the Library</p>
              <p style={{ color: 'gray' }}>
               From sleek bracelets to statement rings, men’s jewellery is redefining modern masculinity with bold elegance.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k6.png')}
                alt="k6"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Where elegance meets glamour</p>
              <p style={{ color: 'gray' }}>
                Keep your treasures shining with regular care. Gentle cleaning and smart storage go a long way.


              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k7.png')}
                alt="k7"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="border p-3">
            <Col xs={12} md={6}>
              <h5>08 Sep, 2022 | 0 Comment</h5>
              <p style={{ fontSize: '22px' }}>Elegance, redefined in jewelry</p>
              <p style={{ color: 'gray' }}>
                Your big day deserves brilliance. From heirloom pieces to custom sets, bridal jewellery seals the moment in sparkle.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={require('./img/k8.png')}
                alt="k8"
                className="img-fluid"
                style={{ height: '270px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
 
      <Footer />
    </div>
  )
}

export default Blog
