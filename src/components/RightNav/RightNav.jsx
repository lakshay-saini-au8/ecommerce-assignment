import React from "react";
import Button from "../Button/Button";
import "./RightNav.css";
import { cartEmptyAction } from "../../redux/actions/cartUpdateAction";
import { connect } from "react-redux";
const RightNav = ({ cartEmptyAction, cartData }) => {
  const cartEmpty = () => {
    cartEmptyAction();
  };

  return (
    <div className="PayCard">
      <div className="PayCard__title">Cart Total</div>
      <div className="PayCard__summary">
        <div className="PayCard__details">
          <p>Subtotal:</p>
          <p>
            $
            {cartData
              ? cartData.reduce((prev, item) => {
                  return prev + item.price;
                }, 0)
              : 0}
          </p>
        </div>
        <div className="PayCard__details">
          <p>Delivery:</p>
          <p>Free</p>
        </div>
        <div className="PayCard__details">
          <p>Total:</p>
          <p>
            $
            {cartData
              ? cartData.reduce((prev, item) => {
                  return prev + item.price;
                }, 0)
              : 0}
          </p>
        </div>
      </div>
      <div className="PayCard__btn" onClick={cartEmpty}>
        <Button text="Checkout" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cartState.cart,
});

export default connect(mapStateToProps, { cartEmptyAction })(RightNav);
