import React from "react";
import BackArrow from "../assets/img/back-arrow.png";

const BackButton = () => {
  return (
    <div>
      <button className="d-inline">
        <img src={BackArrow} alt="Back" />
      </button>
    </div>
  );
};

export default BackButton;
