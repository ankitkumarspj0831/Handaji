import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class home extends Component {
  state = {
    dataFetched: [],
  };

  componentDidMount() {
    fetch("http://localhost:8080/")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        this.setState({ dataFetched: result.data });
        console.log("Fetched successfully.");
      })
      .catch((err) => {
        console.log("Fetching Failed.");
      });
  }
  render() {
    document.title = "Welcome To Startup World";
    return (
      <Container style={{ width: "80%" }}>
        <p></p>
        <p>List of Startups: </p>
        {this.state.dataFetched.map((element, key) => {
          return (
            <Card style={{ margin: "10px" }}>
              <Card.Body>
                {key + 1}. {element.name}, {element.country}
              </Card.Body>
            </Card>
          );
        })}
        <Link to="/create-new">
          <Button>Create New</Button>
        </Link>
      </Container>
    );
  }
}

export default home;
