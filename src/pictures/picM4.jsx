import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picM4 from "../images/m4.jpeg";
import "../styles/pic.css";

const PicM4 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/pictures">
          <img src={picM4} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicM4;
