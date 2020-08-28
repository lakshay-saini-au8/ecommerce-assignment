import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import "./SideNav.css";
import CFS from "../CFS/CFS";
import SocialIcon from "../SocialIcon/SocialIcon";

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="SideButton">
          <Button text="%Discount%" type="primary" />
          <Button text="New This Week" type="secondary" />
        </div>
        <div className="CfsButton">
          <CFS />
        </div>
        <div className="SocialTab">
          <SocialIcon />
        </div>
      </div>
    );
  }
}

export default SideNav;
