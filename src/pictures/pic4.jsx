import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic4s from "../images/s4.jpeg";
import "../styles/pic.css";

const PicS4 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/sketch">
          <img src={pic4s} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
    </div>
       
    </>
  );
};

export default PicS4;
