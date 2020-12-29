import React from "react";
import "./style.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="errorDiv">
        <h2>
          Something went wrong.
          <br />
          <br /> Please try again later.
        </h2>
      </div>
    );
  }
}

export { ErrorPage };
