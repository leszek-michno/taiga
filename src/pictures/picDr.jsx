import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picDr from "../images/dr1.jpeg";
import "../styles/pic.css";

const PicDr = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/draw">
          <img src={picDr} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicDr;
