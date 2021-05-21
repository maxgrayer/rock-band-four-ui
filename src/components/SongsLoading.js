import React from "react";

function SongsLoading(Component) {
  return function SongsLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Loading... Please Stand By.
      </p>
    );
  };
}
export default SongsLoading;
