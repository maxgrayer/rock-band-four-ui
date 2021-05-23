import React from "react";
import { Alert } from "react-bootstrap";

function SongsLoading(Component) {
  return function SongsLoadingComponent({ isLoading, errorMessage, ...props }) {
    if (!isLoading && !errorMessage) return <Component {...props} />;
    if (errorMessage) return <Alert variant="danger">{errorMessage}</Alert>;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Loading... Please Stand By.
      </p>
    );
  };
}
export default SongsLoading;
