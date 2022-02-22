import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic4d from "../images/d4.jpeg";
import "../styles/pic.css";

const PicD4 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/digital">
          <img src={pic4d} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicD4;
