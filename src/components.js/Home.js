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
           <h1>Hi, I'm <span className='clr-purple'>WAQAR MUSHTAQ</span>.... </h1>
            <div className='sub-title'><h2>Disscus <span className='clr-purple'>here</span> about Myself</h2></div>
        </div>
       <Row className='row'>
         <Col className='c1' sm={6}>
         <p>
              I interested in programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <p><span className='clr-purple'>C++,Javascript,CSS..</span></p>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <span className="clr-purple">Web Technologies and Products </span> 
               
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <span className="clr-purple">Node.js</span> and
              <i>
                <span className="clr-purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </span>
              </i>
              &nbsp; like
              <i>
                <span className="clr-purple"> React.js and Next.js</span>
              </i>
            </p>
        
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