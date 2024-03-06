import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const Contact = () => {
  return (
    <Container>
    <h2> &lt;contact_me&gt;</h2>

    <Form>
        <Form.Group className="" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder=" _name" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="_email" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="_message" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicSubmit">
            <Button>Submit</Button>
        </Form.Group>
    </Form>
    </Container>
);
};

export default Contact;
