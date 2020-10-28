import React, { Component } from "react";
import "./style.css"
class Home extends Component {
  render() {
    const readybanner = {
      color: "white",
      background: "DodgerBlue",
      width: "200px",
      padding: "25px",
      padding: "10px",
      border: "25px solid navy"
    };
    const readybannerh2 = {
      color: "white",
      background: "DodgerBlue",
      width: "200px",
      padding: "25px",
      padding: "10px",
      border: "25px solid navy"
    };
    return (
      <div style={{readybanner}}>
        {/*<h2 style={{color: "red", background: "green"}}>*/}
        <h2 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>
        {/* <h2 id="ready-banner" className="p-3 mb-2 bg-primary text-white ready-banner"> */}
        {/* <h2 id="ready-banner" className="text-white ready-banner"> */}
          Are you seeking a Full Stack Developer?
        </h2>
        <h3 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>You found one thats unique!</h3>
        <h4 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>Full Stack Developer with passion for free secure and opensource technologies.</h4>
        <p></p>
        {/*
        <img
          src="https://i.ibb.co/zSqyVSj/horizontal-code-light-blue-6-100ths-sec-push.webp"
          height="370"
          alt="Cyberspace"
          border="0"
          opacity="0.6"   
        />
        */}
      </div>
    );
  }
}

export default Home;
