import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Buttons() {
  return (
    <div class="container buttons-container">
      {/*Home Button*/}
      <Link className="btn btn-outline-primary" to="/">
        Home
      </Link>

      {/*Play Button*/}
      {/* <Link to="/game" className="btn btn-outline-info">
        Start Game!
      </Link> */}

      {/*Contact Button*/}
      <Link to="/contact" className="btn btn-outline-success">
        Contact
      </Link>

      {/*About Button*/}
      <Link to="/about" className="btn btn-outline-danger">
        About
      </Link>
    </div> /*BootStrap Container ENDS*/
    /*BootStrap jumbotron div ENDS*/
  );
}

export default Buttons;
