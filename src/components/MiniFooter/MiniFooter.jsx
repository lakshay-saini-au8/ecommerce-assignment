import React, { Component } from "react";
import "./MiniFooter.css";
import Button from "../Button/Button";
class MiniFooter extends Component {
  state = {
    input: "",
  };
  handelChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    alert(this.state.input);
  };
  render() {
    return (
      <div className="MiniFooter">
        <div className="MiniFooter__left">
          <p style={{ fontSize: "18px", fontWeight: "800" }}>
            Subscribe for a{" "}
            <span style={{ color: "orange" }}>25% Discount</span>
          </p>
          <p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "2" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iure similique sed officia. Qui, quibusdam!
          </p>
        </div>
        <div className="MiniFooter__right">
          <form onSubmit={this.handelSubmit}>
            <input
              type="text"
              onChange={this.handelChange}
              value={this.state.input}
            />
            <div style={{ width: "70px" }}>
              <Button text="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MiniFooter;
