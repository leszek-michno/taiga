import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import pic3s from "../images/s3.jpeg";
import "../styles/pic.css";

const PicS3 = () => {
  return (
    <>
      <div className="pic-div">
        <NavLink to="/sketch">
          <img src={pic3s} alt="" className="pic" />
          <p>
            powrót do galerii <AiOutlineRollback />
          </p>
        </NavLink>
    </div>
       
    </>
  );
};

export default PicS3;
