import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic1s from "../images/s1.jpeg";
import "../styles/pic.css";

const PicS1 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/sketch">
          <img src={pic1s} alt="obraz" />
          <br />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
      
      </div>
      
    </>
  );
};

export default PicS1;
