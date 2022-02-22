import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic1d from "../images/d1.jpeg";
import "../styles/pic.css";

const PicD1 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/digital">
          <img src={pic1d} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicD1;
