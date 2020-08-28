import React from "react";
import "./Footer.css";
import MiniFooter from "../MiniFooter/MiniFooter";
import MainFooter from "../MainFooter/MainFooter";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Upper">
        <MiniFooter />
      </div>
      <div className="Lower">
        <MainFooter />
      </div>
    </div>
  );
};

export default Footer;
