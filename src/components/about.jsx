import Container from "react-bootstrap/Container";
import htmlIcon from "../assets/icons/html-5.svg";
import cssIcon from "../assets/icons/css-3.svg";
import jsIcon from "../assets/icons/javascript.svg";
import reactIcon from "../assets/icons/react.svg";

const About = () => {
    return (
        <Container className="sm text-center" id="about">
            <h1> &lt; about_me /&gt;</h1>
            <div className="row">
                <div className="sm" id="aboutMe">
                    <p>
                        My name is Ismail Babalola. I am Originally from Lagos Nigeria, I moved to the UK in 2010. 
                        I graduated from Kingston University with a bachelor degree in Aerospace Engineering.
                        I have since then moved to the bootcamp in Frontend Development provided by Edx University of Birmingham to learn more about frontend web development. I want to further develop my skills and knowledge in Javascript and React
                        and I hope to fully get into the industry in the near future.
                    </p>
                </div>
            </div>

            <div className="techStack">
                <h1> &lt; Skills /&gt;</h1>
                <div className="techIcons">
                    <img
                        src={htmlIcon}
                        alt="htmlIcon"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <img
                        src={cssIcon}
                        alt="cssIcon"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <img
                        src={jsIcon}
                        alt="jsIcon"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <img
                        src={reactIcon}
                        alt="reactIcon"
                        style={{ width: "50px", height: "50px" }}
                    />
                </div>
            </div>
        </Container>
    );
};

export default About;
