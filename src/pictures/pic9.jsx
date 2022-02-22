import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic9s from "../images/s9.jpeg";
import "../styles/pic.css";

const PicS9 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/sketch">
          <img src={pic9s} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
    </div>
       
    </>
  );
};

export default PicS9;
