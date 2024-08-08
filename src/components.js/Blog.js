import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ogimage from '../asset/image/ogimage.jpg';
import wlimage from '../asset/image/wlimage.jpg';
import htimage from '../asset/image/htimage.jpg';
import nwimage from '../asset/image/nwimage.jpg';
import { Container } from 'react-bootstrap';
export default function AppBlog(){
    return(
        <section id='blog'>
         <Container fluid>
          <div className='title'>
            <h2>blogs</h2>
            <div className='subtitle'>
              <h3>Inform here about blog</h3>
            </div>
          </div>
           <Row className='row'>
            <Col md={6} sm={3} lg={12}>
             <div className='holder'>
              <Card className='card'>
                <Card.Img className='cimg' variant='top'src={ogimage}/>
                  <Card.Body className='cardb'>
                   <Card.Title className='tname'>
                   Online Gaming
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh sgsgdgdgd shgdsgdgdg dhhdgdgd
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col md={6} sm={3} lg={12}>
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col md={6} sm={3} lg={12} >
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col md={6} sm={3} lg={12}>
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
           </Row>
           <Row className='row'>
            <Col sm={6}>
             <div className='holder'>
              <Card className='card'>
                <Card.Img className='cimg' variant='top'src={ogimage}/>
                  <Card.Body className='cardb'>
                   <Card.Title className='tname'>
                   Online Gaming
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh sgsgdgdgd shgdsgdgdg dhhdgdgd
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col sm={6}>
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
           </Row>
           <Row className='row'>
            <Col sm={3}>
             
            </Col>
            <Col sm={3}>
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col sm={3}>
             <div className='holder'>
             <Card className='card'>
                <Card.Img className='cimg' variant='top'src={nwimage}/>
                  <Card.Body className='cardb'>
                  <Card.Title className='tname'>
                   News
                   </Card.Title>
                   <Card.Text>
                    fsdksdjks eueuajedjdh
                   </Card.Text>
                   <a href='#' className='btn btn-primary'>Read more</a>
                  </Card.Body>
              </Card>
             </div>
            </Col>
            <Col sm={3}>
             
            </Col>
           </Row>
         </Container>         
      </section>
    );
}