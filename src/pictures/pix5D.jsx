import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic5d from "../images/d5.jpeg";
import "../styles/pic.css";

const PicD5 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/digital">
          <img src={pic5d} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicD5;
