import { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

class addNew extends Component {
  state = {
    name: "",
    country: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/create-new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      /* //.then((result) => result.json()) */
      .then((info) => {
        console.log(info);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Sending data to backend failed");
        console.log(err);
      });
  };

  render() {
    document.title = "Create New Startup";
    return (
      <Container style={{ margin: "10px", width: "80%" }}>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Name..."
                name="name"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} c>
            <Form.Label column sm="2">
              Country
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Country..."
                name="country"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Save
          </Button>
        </Form>
      </Container>
    );
  }
}

export default addNew;
