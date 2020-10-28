import React, { useEffect, useState } from "react";
//import API from "../utils/API";

function portfolio() {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <h4>Work Experience and Projects</h4>
      {/*Start Content*/}
      <div>
      <div class="container-fluid mycontainer">
      <div class="row myrows">
        <div class="col-xl-2 mycols">
          <h3>Uconn Coding Boot Camp Student.</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/uconn-coding-bootcamp-logo.png"/ >
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/uconn-coding-bootcamp.html">More Info</a>
          </button>
        </div>
        <div class="col-xl-2 mycols">
          <h3>Edgehill Senior Living Food Server/Dietary-Aide.</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/edgehill_logo-fall.png" alt="Edgehill a Benchmark Senior Living Community" />
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/edgehill.html">More Info</a>
          </button>
        </div>
        <div class="col-xl-2 mycols">
          <h3>Computer Science Student at Norwalk Community College.</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/ncc-logo-blue-with-text.png" alt="Campus Logo NCC Norwalk Community College" />
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/ncc.html">More Info</a>
          </button>
        </div>
        <div class="col-xl-2 mycols">
          <h3>Worked as a Waiter/Server in Various Staffing Companies in Greenwich and Westchester County NY.</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/food-service-kitchen.jpg" alt="A Manager and Waiter in the Kitchen holding serving trays to serve Breakfast to tables." />
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/staffing.html">More Info</a>
          </button>
        </div>
        <div class="col-xl-2 mycols">
          <h3>Taught Scratch and JavaScript Basics at BrainBoost.</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/brainboost-672x372.jpg" alt="Think Discover Build The BrainBoost LightBulb Logo." />
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/brain-boost.html">More Info</a>
          </button>
        </div>
        <div class="col-xl-2 mycols">
          <h3>Yo hablo Espanol. (I speak Spanish.)</h3>
          <img class="img-responsive styledImage" width="200px" src="./assets/spanish-language.jpg" alt="Yo hablo Espanol. (I speak Spanish.)" />
          <button type="button" class="btn btn-success">
            <a class="href-text-light" href="./portfolio/espanol.html">More Info</a>
          </button>
        </div>
    </div>
      </div>
      {/*End Content*/}
    </div>
  );
}

export default portfolio;
