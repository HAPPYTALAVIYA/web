import React from 'react'
import Header from './Header';
import './Shop.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function Shop() {
  return (
    <div>
      <Header />
      <Col xs={12}>
  <div className="background text-white">
    <Row className="w-100">
      <Col md={10} xs={12}>
        <div className="title">
          Shop
        </div>
      </Col>
      <Col md={2} xs={12}>
        <div className="breadcrumb">
          Home | Shop
        </div>
      </Col>
    </Row>
  </div>
</Col>

      <Row>

        <Col md={12} style={{ marginTop: '10%' }}>
          <img src={require('./img/g1.png')}></img>
        </Col>
      </Row>
      <Container>
        <Row className='mt-5'>
          <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a1.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Anvesha drop earrings</Card.Title>
              <h5>$369.00</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a2.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Aretha Rings</Card.Title>
              <h5>$269.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a3.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Caelus Lock Bracelet</Card.Title>
              <h5>$169.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a4.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Charm ear Climbers</Card.Title>
              <h5>$157.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a5.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Clarrabelle Bracellet</Card.Title>
              <h5>$345.00</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a6.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Drop Long Earings</Card.Title>
              <h5>$323.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a7.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Exie Twister Bangle</Card.Title>
              <h5>$345.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a8.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Kassidy Bracelet</Card.Title>
              <h5>$249.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a9.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Kassidy Rings</Card.Title>
              <h5>$345.00</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a10.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Multiwearable Charm</Card.Title>
              <h5>$323.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a11.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Narvada Stud Earrings</Card.Title>
              <h5>$345.00</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} >
            <Card className="mb-4" style={{width:'303px'}}>
            <Card.Img variant="top" src={require('./img/a12.png')} style={{height:'300px',width:'300px'}} />
            <Card.Body className='text-center' >
              <Card.Title style={{color:'brown'}} className='text-center'>Secret Slpender Bangle</Card.Title>
              <h5>$249.00</h5>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        
      </Container>

    <Footer />
    </div>
  )
 
}

export default Shop
