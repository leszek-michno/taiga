import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picDr3 from "../images/dr3.jpeg";
import "../styles/pic.css";

const PicDr3 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/draw">
          <img src={picDr3} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicDr3;
