const { default: React } = require("react");
const { Component } = require("react");
const { Container, Navbar, NavbarBrand } = require("react-bootstrap");

class AppFooter extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavbarBrand>Built with 💚 by Max Grayer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default AppFooter;
