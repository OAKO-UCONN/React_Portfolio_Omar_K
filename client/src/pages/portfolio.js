import React, { useEffect, useState } from "react";
//import API from "../utils/API";

function portfolio() {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <h4>Work Experience and Projects</h4>
      {/*Start Content*/}
      <div>
      <div className="container-fluid mycontainer">
      <div className="row myrows">




        <div className="col-xl-2 mycols">
          <h3>Uconn Coding Boot Camp Student.</h3>
          <img className="img-responsive styledImage" width="200px" src="./assets/uconn-coding-bootcamp-logo.png"/ >
            <a class="btn btn-primary" href="https://soeprofed.uconn.edu/uconn-coding-boot-camp/" role="button">Uconn Coding Bootcamp Program</a>
            <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a> 
        </div>




        <div className="col-xl-2 mycols">
          <h3>Edgehill Senior Living Food Server/Dietary-Aide.</h3>
          <img className="img-responsive styledImage" width="200px" src="https://freeimage.host/3jZj5u" alt="Edgehill a Benchmark Senior Living Community" />
          <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a>
        </div>




        <div className="col-xl-2 mycols">
          <h3>Computer Science Student at Norwalk Community College.</h3>
          <img className="img-responsive styledImage" width="200px" src="./assets/ncc-logo-blue-with-text.png" alt="Campus Logo NCC Norwalk Community College" />
          <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a>
        </div>




        <div className="col-xl-2 mycols">
          <h3>Worked as a Waiter/Server in Various Staffing Companies in Greenwich and Westchester County NY.</h3>
          <img className="img-responsive styledImage" width="200px" src="./assets/food-service-kitchen.jpg" alt="A Manager and Waiter in the Kitchen holding serving trays to serve Breakfast to tables." />
          <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a>
        </div>




        <div className="col-xl-2 mycols">
          <h3>Taught Scratch and JavaScript Basics at BrainBoost.</h3>
          <img className="img-responsive styledImage" width="200px" src="./assets/brainboost-672x372.jpg" alt="Think Discover Build The BrainBoost LightBulb Logo." />
          <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a>
        </div>




        <div className="col-xl-2 mycols">
          <h3>Yo hablo Espanol. (I speak Spanish.)</h3>
          <img className="img-responsive styledImage" width="200px" src="./assets/spanish-language.jpg" alt="Yo hablo Espanol. (I speak Spanish.)" />
          <a class="btn btn-info" href="https://www.trilogyed.com/employers/" role="button">Trilogy Education Workforce Training Services</a>
        </div>




    </div>
      </div>
      {/*End Content*/}
    </div>
    </div>
  );
}

export default portfolio;
