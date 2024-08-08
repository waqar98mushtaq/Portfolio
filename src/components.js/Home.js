import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../asset/image/img1.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook,  } from '@fortawesome/free-brands-svg-icons';

export default function AppHome(){
    return(
       <section id='Home' className='block about-block'>
       <Container fluid>
        <div className='title-holder'>
           <h2>About My Self </h2>
            <div className='sub-title'>Disscus here</div>
        </div>
       <Row className='row'>
         <Col className='c1' sm={6}>
         <p>Im a computer science student.</p>
         <p>Im a computer science student.</p>
         </Col>
          
         <Col className='c2 text-center' sm={6}><Image src={img1}/></Col>
       </Row>
       <div className='home-icon'>
      <div className='title-holder'>
            <h1>FIND <span className='clr-purple'>ME</span> ON</h1>
            <p>
              Feel free contact with me
            </p>
            <div className='home-about-social'>
              <Row className='row'>
                <Col sm={12}>
        <div className='icon '><FontAwesomeIcon icon= {faYoutube} /></div>
       
        <div className='icon '><FontAwesomeIcon icon={faInstagram}/></div>
      
        <div className='icon '><FontAwesomeIcon icon={faFacebook} /></div>
     
        <div className='icon '><FontAwesomeIcon icon={faYoutube}/></div>
        </Col>
        </Row>
      </div>
            </div>
            
       </div>
     </Container>
     </section>
    )
}