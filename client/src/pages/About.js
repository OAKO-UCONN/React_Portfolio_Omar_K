import React from "react";
// import "../pages/style.css";
// import "../pages/about.css";
import "./about.css" 

function About() {
  return (
  <div class="container-fluid mycontainer">
  <div className="jumbotron">
  <h1 className="display-4">About</h1>
    <hr className="my-4"/>
    <div className='about-wrapper'>
    <h1 className="h1-intro">Resume</h1>
    <h3 className="intro-p-tag text-box">Here is my resume below on the web:</h3>
    </div>
    <div className='conclusion-wrapper'>
    </div>
  </div>
  </div>
   );
}

export default About;

//style={{color:"blue"}}
//style={{color: "#fc6203"}}
//text-align: center;
//style={{text-align: center;}}