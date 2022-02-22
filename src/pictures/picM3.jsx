import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import picM3 from "../images/m3.jpeg";
import "../styles/pic.css";

const PicM3 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/pictures">
          <img src={picM3} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicM3;
