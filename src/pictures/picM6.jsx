import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picM6 from "../images/m6.jpeg";
import "../styles/pic.css";

const PicM6 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/pictures">
          <img src={picM6} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicM6;
