import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import aboutimage from '../asset/image/about.png';
import c1image from '../asset/image/c1.png';
import rjsimage from '../asset/image/rjs.png';
import njsimage from '../asset/image/njs.png'
import jsimage from '../asset/image/js.png';
import gitimage from '../asset/image/git.png';
export default function AppAbout(){
    return(
        <section id='about' className='block about-block' >
  <Container fluid>
    <div className='title-holder'>
        <h1>About <span className='clr-purple'>Myself</span></h1>
       
    </div>
      <Row>
        <Col className='c3' md={4}>
        <h2>let me start <span className='clr-purple'>who </span> im..................</h2>
        <p>My name is <span className='clr-purple'>Waqar Mushtaq</span>. I have complete <span className='clr-purple'>Bs Computer Science </span>.</p>
        <p>Now, im currently doing internship at <span className='clr-purple'>Kerative Kode solutions</span>..</p>
        </Col>
        <Col className='c4' md={8}><Image src={aboutimage}/></Col> 
      </Row>
      <div className='about-skill'>
        <h1 className='skil'>Professional Skill</h1>
        </div>
      <Row>
        <Col className='tech-icon col-md-3 col-4'><Image src={c1image}/></Col>
        <Col className='tech-icon col-md-3 col-4' ><Image src={jsimage}/></Col>
        <Col className='tech-icon col-md-3 col-4' ><Image src={njsimage}/></Col>
       <Col className='tech-icon col-md-3 col-4'><Image src={rjsimage}/></Col>
        <Col className='tech-icon col-md-3 col-4' ><Image src={gitimage}/></Col>
        <Col className='tech-icon col-md-3 col-4' ><Image src={jsimage}/></Col>
      </Row>
    </Container>
        </section>
    )
}