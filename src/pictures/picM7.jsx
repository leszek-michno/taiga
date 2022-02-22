import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picM7 from "../images/m7.jpeg";
import "../styles/pic.css";

const PicM7 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/pictures">
          <img src={picM7} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicM7;
