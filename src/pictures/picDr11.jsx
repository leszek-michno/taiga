import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picDr11 from "../images/dr11.jpeg";
import "../styles/pic.css";

const PicDr11 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/draw">
          <img src={picDr11} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicDr11;
