import React from "react";
import "./Button.css";
const Button = ({ text, type = "primary", textAlign = "center" }) => {
  return <button className={`btn ${type} ${textAlign}`}>{text}</button>;
};

export default Button;
