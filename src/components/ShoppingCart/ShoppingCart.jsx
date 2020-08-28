import React, { Component } from "react";
import "./ShoppingCart.css";
import CartTable from "../CartTable/CartTable";

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <div className="Cart__Heading">Shopping Cart</div>
        <CartTable />
      </>
    );
  }
}

export default ShoppingCart;
