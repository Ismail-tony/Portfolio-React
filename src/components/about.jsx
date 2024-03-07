import Container  from "react-bootstrap/Container"

import htmlIcon from "../assets/html-5.svg"

const About = () => {
    return (
        <Container className='sm col-lg-6 text-center'>
            <div className="row">
                <div className="about sm col-lg-6">
                <h1> &lt; about_me &gt;</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut possimus architecto animi fugit officiis iusto quae perspiciatis laborum commodi. Et, impedit in non debitis ratione nisi recusandae sunt pariatur ad!</p>
                </div>

                <div className="resumePdf sm col-lg-6">
                    <a href="https://drive.google.com/file/d/1yNfP3rS8yB0JYsK0rXQqE7jO2Z4h9fKZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>

            <div className="techStack">
                <h1> &lt; tech_stack &gt;</h1>
                <div className="techIcon">
                    <img src={htmlIcon} alt="htmlIcon" style={{width: "100px", height: "100px"}}/>
                </div>
            </div>
        </Container>
    )
}


export default About
