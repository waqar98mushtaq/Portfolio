import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';

export default function AppFooter() {
  let date = new Date();
  let year = date.getFullYear();
  return (

    <footer className='footers'>
      <div className='footer-body'>
        <Row >
          <Col md={4} className="footer-copywright">
            <h3>Designed and Developed by Waqar Mushtaq</h3>
          </Col>
          <Col md={4} className="footer-copywright">
            <h3>Copyright © {year}  </h3>
          </Col>
          <Col md={4} className="float-end" >
            <div className='d-flex'>
              <FontAwesomeIcon className='px-4' icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon className='px-4' icon={faFacebook} />
            </div>
          </Col>
        </Row>
      </div>
    </footer>

  )
}