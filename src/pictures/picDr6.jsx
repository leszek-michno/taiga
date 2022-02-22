import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picDr6 from "../images/dr6.jpeg";
import "../styles/pic.css";

const PicDr6 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/draw">
          <img src={picDr6} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicDr6;
