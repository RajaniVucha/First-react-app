import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
function AboutLinkIcon() {
  return (
    <div className="about">
      <Link to="/about">
        <FaQuestion size={20} color="purple" />
      </Link>
    </div>
  );
}

export default AboutLinkIcon;
