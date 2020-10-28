import React, { useEffect, useState } from "react";
//import API from "../utils/API";



function contact() {
  return (
    <div classNane="contact-page">
      <h1 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>Contact Me</h1>
      <h4 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>Email: oako.ucon.coding.bootcamp@gmail.com</h4>
      <div style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>
        <h3 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>My profiles</h3>
          <a class="btn btn-info" href="https://www.linkedin.com/in/omar-kazi-2a7945a0/" role="button">LinkedIn</a>
          <a class="btn btn-success" href="https://github.com/OAKO-UCONN" role="button">GitHub</a>

      </div>
      
    </div>
  );
}

export default contact;
