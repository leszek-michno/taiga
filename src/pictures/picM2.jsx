import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picM2 from "../images/m2.jpeg";
import "../styles/pic.css";

const PicM2 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/pictures">
          <img src={picM2} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicM2;
