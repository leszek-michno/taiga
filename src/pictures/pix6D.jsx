import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic6d from "../images/d6.jpeg";
import "../styles/pic.css";

const PicD6 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/digital">
          <img src={pic6d} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicD6;
