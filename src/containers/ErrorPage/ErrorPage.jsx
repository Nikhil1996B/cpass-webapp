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
        <nav>
          <p><a href="/">Home</a></p>
          <p onClick={() => { window.history.back() }}>Go Back</p>
        </nav>
      </div>
    );
  }
}

export { ErrorPage };
