import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from 'react-router-dom'
const Home =() => {
    return (
    <div className='row'>
        <div className='sm text-center'>
            <h1>My name is <span className="text-danger">Ismail Babalola</span></h1>
            <h2>I am a Web Developer</h2>
            <h2>Based in LDN, UK</h2>
            <Link to="https://github.com/Ismail-tony" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </Link>
            <Link to="https://www.linkedin.com/in/ismail-babalola" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </Link>
            
        </div>
        <div className='sm text-center'>
            <img src="https://avatars.githubusercontent.com/u/106067" alt="my image" className="img-fluid"/>
        </div>
    </div>
    )
}

export default Home