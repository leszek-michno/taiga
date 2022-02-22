import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
import img1 from "../images/m5.jpeg";
import img2 from "../images/m1.jpeg";
import img3 from "../images/m8.jpeg";
import img4 from "../images/m2.jpeg";
import img5 from "../images/m4.jpeg";
import img6 from "../images/m6.jpeg";
import img7 from "../images/m7.jpeg";
import img8 from "../images/m3.jpeg";
import img9 from "../images/m9.jpeg";
import "../styles/albums.css";

const Pictures = () => {
  return (
    <div className="show">
        <NavLink to='/picM5'><img src={img1}  alt='digital'/></NavLink>
        <NavLink to='/picM1'><img src={img2}  alt='digital'/></NavLink>
        <NavLink to='/picM8'><img src={img3}  alt='digital'/></NavLink>
        <NavLink to='/picM2'><img src={img4}  alt='digital'/></NavLink>
        <NavLink to='/picM4'><img src={img5}  alt='digital'/></NavLink>
        <NavLink to='/picM6'><img src={img6}  alt='digital'/></NavLink>
        <NavLink to='/picM7'><img src={img7}  alt='digital'/></NavLink>
        <NavLink to='/picM3'><img src={img8}  alt='digital'/></NavLink>
        <NavLink to='/picM9'><img src={img9}  alt='digital'/></NavLink>
        <div className="back-next">
        <NavLink to="/digital">
          <span>
            poprzedni album <AiOutlineStepBackward />
          </span>
        </NavLink>
        {"       "}
        <NavLink to="/ ">
          <span>
            <AiFillStepForward /> albumy 
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Pictures;
