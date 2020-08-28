import React from "react";
import "./CartTable.css";
import { connect } from "react-redux";
import { cartInc, cartDec } from "../../redux/actions/cartUpdateAction";
const CartTable = ({ cartData, cartInc, cartDec }) => {
  const increaseQty = (e) => {
    cartInc(+e.target.dataset.id);
  };
  const DecreaseQty = (e) => {
    cartDec(+e.target.dataset.id);
  };

  return (
    <>
      <table className="CartTable">
        <thead className="CartTable__head">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="CartTable__body">
          {cartData ? (
            cartData.length === 0 ? (
              <div>Your Cart is empty</div>
            ) : (
              cartData.map((item) => (
                <tr key={item.id}>
                  <td className="Image__body">
                    <img
                      src={item.src}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        marginTop: "14px",
                        alignItems: "center",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className="Quantity">
                      <p className="Quantity__head">Qty</p>
                      <p
                        className="Quantity__minu"
                        data-id={item.id}
                        onClick={DecreaseQty}
                      >
                        -
                      </p>
                      <p className="Quantity__value">{item.qty}</p>
                      <p
                        className="Quantity__plus"
                        data-id={item.id}
                        onClick={increaseQty}
                      >
                        +
                      </p>
                    </div>
                  </td>
                </tr>
              ))
            )
          ) : (
            <div>Your Cart is empty</div>
          )}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cartState.cart,
});

export default connect(mapStateToProps, { cartInc, cartDec })(CartTable);
