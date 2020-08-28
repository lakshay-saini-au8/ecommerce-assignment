import React, { Component } from "react";
import "./MainFooter.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
class MainFooter extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="MainFooter__left">
          <Logo />
          <p style={{ fontSize: "10px", fontWeight: "400", lineHeight: "2" }}>
            Copyright &copy;2018 All rights reserved | This template is made
            with by Colorlib
          </p>
        </div>
        <div className="MainFooter__right">
          <div className="Footer__Bar">
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default MainFooter;
