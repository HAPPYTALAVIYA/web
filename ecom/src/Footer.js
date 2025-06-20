import React from 'react';
import './Footer.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer-wrapper pt-5">
      <footer className="footer py-5">
        <Container>
          <Row>
            {/* Contact Info */}
            <Col xs={12} md={4} className="mb-4 text-md-start text-center">
              <div>
                <p className="footer-text">
                  <FontAwesomeIcon icon={faLocationDot} className="icon3" />
                  &nbsp;123 Yarran St, Punchbowl, NSW 2196, Australia
                </p>
                <p className="footer-text">
                  <FontAwesomeIcon icon={faEnvelope} className="icon3" />
                  &nbsp;support@example.com
                </p>
                <p className="footer-text">
                  <FontAwesomeIcon icon={faPhone} className="icon3" />
                  &nbsp;+64 8342 1245
                </p>
              </div>
            </Col>

            {/* Newsletter */}
            <Col xs={12} md={4} className="mb-4 text-md-start text-center">
              <h5>Subscribe Newsletter</h5>
              <p className="footer-subtext">
                Register to read the latest news, offers, and events. We won’t spam your inbox.
              </p>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email..." />
                </Form.Group>
              </Form>
            </Col>

            {/* Footer Links */}
            <Col xs={12} md={4} className="text-md-start text-center">
              <Row>
                <Col xs={6} className="mb-3">
                  <h6>About Us</h6>
                  <ul className="footer-links">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Our store</li>
                    <li>Our story</li>
                  </ul>
                </Col>
                <Col xs={6} className="mb-3">
                  <h6>Resources</h6>
                  <ul className="footer-links">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Returns & Refunds</li>
                    <li>FAQs</li>
                    <li>Shipping</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr />

          <p className="footer-copy text-center mt-3">
            &copy; 2025 PlantStore. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </div>  );
}

export default Footer;
