import React, { Component } from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";
import RightNav from "../components/RightNav/RightNav";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Main">
          <div className="LeftSection">
            <SideNav />
          </div>
          <div className="CenterSection">
            <div className="Cart">
              <ShoppingCart />
            </div>
          </div>
          <div className="RightSection">
            <RightNav />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
