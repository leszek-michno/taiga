import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic2s from "../images/s2.jpeg";
import "../styles/pic.css";
// import Sketches from "../components/sketch";

const PicS2 = () => {
  return (
    <>
    
      <div className="pic-div">
        <NavLink to= '/sketch'>
          <img src={pic2s} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
               
    </div>
    
       
    </>
  );
};

export default PicS2;
