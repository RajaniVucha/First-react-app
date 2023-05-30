/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
function Header(props) {
  let array = [1, 2, 3, 4];
  const [arr, setarr] = useState([1, 2, 3, 4]);
  const [digit, setDigit] = useState(0);
  const headerStyles = {
    backgroundColor: props.bgcolor,
    color: props.textcolor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2 style={{ color: props.textcolor }}>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgcolor: "rgba(0,0,0,0.4)",
  textcolor: "#FF6A95",
};
export default Header;
