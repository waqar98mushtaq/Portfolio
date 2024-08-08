
import resume from '../asset/docs/my-resume.pdf.pdf'; 

export default function AppHome() {
  return (
    <div className='resume'>
      <div className='title-holder'>
        <h1>My Resume</h1>
        <div className='sub-title'>
          <h3>About my education</h3>
        </div>
      </div>
      <div className='row'>
        <a 
          href={resume} 
          role='button' 
          target='_blank' 
          className='btn btn-primary' 
          download="my-resume.pdf"
        >
          Download CV
        </a>
      </div>
      <div className='text-center'>
        <iframe
          className='cv'
          src={resume}
          width="65%"
          height="1100px"
          style={{ border: 'none' }}
          title="CV"
        />
      </div>
    </div>
  );
}