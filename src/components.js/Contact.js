import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact(){
    return(
<section id='contact'>
    <Container fluid>
        <div className='title-contact'>
         <h1>Contact</h1>
         <div className='sub-contact'></div>
         <h3>contact here</h3>
        </div>
        <Form className='contact-form'>
      <Row className='row'>
        <Col sm={3}>
          <Form.Control type='name' placeholder="Enter your name" />
        </Col>
        <Col sm={3}>
          <Form.Control type='email' placeholder="Enter your email" />
        </Col>
        <Col sm={3}>
          <Form.Control type='contact' placeholder="Enter your contact" />
        </Col>
      </Row>
      <Row className='row'>
        <Col sm={11}>
          <Form.Control as='textarea' placeholder="Enter your feedback" />
        </Col>
        </Row>
        <div className='btn'>
    <button className='cbtn' type='submit' >Submit</button>
        </div>
    </Form>
    </Container>
</section>
    );
}
