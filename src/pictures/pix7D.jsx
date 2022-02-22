import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic7d from "../images/d7.jpeg";
import "../styles/pic.css";

const PicD7 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/digital">
          <img src={pic7d} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicD7;
