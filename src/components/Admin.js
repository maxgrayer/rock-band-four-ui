import React from "react";
import { Alert } from "react-bootstrap";

class Admin extends React.Component {
  adminAccessCode = "1234";

  componentDidMount() {
    const enteredAdminPin = prompt("Please enter Admin PIN");
    this.setState({ enteredAdminPin: enteredAdminPin });
  }

  render() {
    if (!this.state) {
      return null;
    }

    if (this.state.enteredAdminPin === this.adminAccessCode) {
      return <h1>Welcome Admin!</h1>;
    } else {
      return <Alert variant="danger">Access Denied</Alert>;
    }
  }
}
export default Admin;
