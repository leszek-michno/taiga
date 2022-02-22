import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic8s from "../images/s8.jpeg";
import "../styles/pic.css";

const PicS8 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/sketch">
          <img src={pic8s} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
    </div>
       
    </>
  );
};

export default PicS8;
