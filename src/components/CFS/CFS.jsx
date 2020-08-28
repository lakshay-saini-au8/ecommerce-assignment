import React from "react";
import { connect } from "react-redux";

import "./CFS.css";
const CFS = ({ cartData }) => {
  return (
    <>
      <div className="Cfs__cart">
        <span>
          <i className="fa fa-shopping-cart"></i>
        </span>
        <p>
          CART{" "}
          <span style={{ color: "#ccc" }}>
            ({cartData ? cartData.length : 0})
          </span>
        </p>
      </div>
      <div className="Cfs__cart">
        <span>
          <i className="fa fa-star"></i>
        </span>
        <p>FAVOURITE</p>
      </div>
      <div className="Cfs__cart">
        <span>
          <i className="fa fa-search"></i>
        </span>
        <p>SEARCH</p>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartData: state.cartState.cart,
});
export default connect(mapStateToProps)(CFS);
