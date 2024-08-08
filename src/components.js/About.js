import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import abimage from '../asset/image/abimage.jpg';
import cimage from '../asset/image/c+image.jpg';
import jimage from '../asset/image/jimage.jpg';
import jsimage from '../asset/image/jsimage.jpg';

export default function AppAbout(){
    return(
        <section id='about' className='block about-block' >
  <Container fluid>
    <div className='title-holder'>
        <h2>About Us</h2>
        <div className='subtitle'>
            <h3>About Myself</h3>
        </div>
    </div>
      <Row>
        <Col className='c3' sm={6}>
        <p>Tell about yourself..................</p>
        <p>ssregreg hhdgfhrgjh hgfgjgfjghjfdjhf dgfghgfhjfjhgfj shddfjhg</p>
        </Col>
        <Col className='c4' sm={6}><Image src={abimage}/></Col> 
      </Row>
      <h1 className='about-skill'>Professional Skill</h1>
      <div>
        <div className='tech-icon col-md-4 col-4'><Image src={cimage}/></div>
        <div className='tech-icon col-md-4 col-4' ><Image src={jimage}/></div>
        <div className='tech-icon col-md-4 col-4' ><Image src={jsimage}/></div>
       
      </div>
    </Container>
        </section>
    )
}