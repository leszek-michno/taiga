import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picDr8 from "../images/dr8.jpeg";
import "../styles/pic.css";

const PicDr8 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/draw">
          <img src={picDr8} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicDr8;
