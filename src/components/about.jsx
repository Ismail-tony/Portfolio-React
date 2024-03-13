import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import '../css/about.css'

const About = () => {
    return (
        <Container id="about">
            <h2 className="text-start"> &lt; about_me /&gt;</h2>
            <div className="row text-center">
                <div className="col-lg-6" id="aboutMe">
                    <p>
                        My name is Ismail Babalola. I am Originally from Lagos Nigeria, I moved to the UK in 2010. 
                        I graduated from Kingston University with a bachelor degree in Aerospace Engineering.
                        I have since then moved to the bootcamp in Frontend Development provided by Edx University of Birmingham to learn more about frontend web development. I want to further develop my skills and knowledge in Javascript and React
                        and I hope to fully get into the industry in the near future.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="https://avatars.githubusercontent.com/u/139620500?v=4" alt="my image" className="img rounded" style={{width: "200px", height: "200px"}}/>
                </div>
            </div>
            
            <div id="techStack">
                <h1 className="text-end"> &lt; Skills /&gt;</h1>
                <div  className="row justify-content-center" id="techIcons">
                    <div className="col-sm-2">
                    <FontAwesomeIcon icon={ faHtml5 } style={{ fontSize: '100px', color: "#e34c26"}}/>
                    </div>
                    <div className="col-sm-2">
                    <FontAwesomeIcon icon={ faCss3Alt } style={{ fontSize: '100px', color: "#264de4"}}/>
                    </div>
                    <div className="col-sm-2">
                    <FontAwesomeIcon icon={ faBootstrap } style={{ fontSize: '100px', color: "#7952b3"}}/>
                    </div>
                    <div className="col-sm-2">
                    <FontAwesomeIcon icon={ faJs } style={{ fontSize: '100px', color: "#f0db4f"}}/>
                    </div>
                    <div className="col-sm-2">
                    <FontAwesomeIcon icon={ faReact } style={{ fontSize: '100px', color: "#61dbfb"}}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
