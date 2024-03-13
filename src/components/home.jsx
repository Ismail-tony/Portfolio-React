import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Container } from 'react-bootstrap';


const Home =() => {
    return (
        <Container fluid>
            <div className='row'>
        
                <div className='sm col-lg-6 text-center'>
                    <img src="https://avatars.githubusercontent.com/u/139620500?v=4" alt="my image" className="img rounded-circle" style={{width: "200px", height: "200px"}}/>
                </div>
                <div className='sm col-lg-6 text-center'>
                    <h6> &#47;&#47; My name is <span className="text-danger">Ismail Babalola</span></h6>
                    <h1> &#123;&ldquo; I am a Web Developer</h1>
                    <h2>Based in LDN, UK &rdquo;&#125;</h2>
                    <a href="https://github.com/Ismail-tony" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/ismail-babalola" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
        </div>
        </Container>
 
    )
}

export default Home