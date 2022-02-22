import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
import img1 from "../images/dr5.jpeg";
import img2 from "../images/dr4.jpeg";
import img3 from "../images/dr7.jpeg";
import img4 from "../images/dr6.jpeg";
import img5 from "../images/dr3.jpeg";
import img6 from "../images/dr9.jpeg";
import img7 from "../images/dr10.jpeg";
import img8 from "../images/dr8.jpeg";
import img9 from "../images/dr11.jpeg";
import img10 from "../images/dr2.jpeg";
import img11 from "../images/dr1.jpeg";
import '../styles/albums.css'

const Draws = () => {
  return (
    <div className="black">
    <div className="show">
      <NavLink to="/picDr5">
        <img src={img1} alt="draw" />
      </NavLink>
      <NavLink to="/picDr4">
        <img src={img2} alt="draw" />
      </NavLink>
      <NavLink to="/picDr7">
        <img src={img3} alt="draw" />
      </NavLink>
      <NavLink to="/picDr6">
        <img src={img4} alt="draw" />
      </NavLink>
      <NavLink to="/picDr3">
        <img src={img5} alt="draw" />
      </NavLink>
      <NavLink to="/picDr9">
        <img src={img6} alt="draw" />
      </NavLink>
      <NavLink to="/picDr10">
        <img src={img7} alt="draw" />
      </NavLink>
      <NavLink to="/picDr8">
        <img src={img8} alt="draw" />
      </NavLink>
      <NavLink to="/picDr11">
        <img src={img9} alt="draw" />
      </NavLink>
      <NavLink to="/picDr2">
        <img src={img10} alt="draw" />
      </NavLink>
      <NavLink to="/picDr">
        <img src={img11} alt="draw" />
      </NavLink>
      <div className="back-next">
        <NavLink to="/">
          <span>
            albumy <AiOutlineStepBackward />
          </span>
        </NavLink>
        {"           "}
        <NavLink to="/digital">
          <span>
            <AiFillStepForward /> kolejny album{" "}
          </span>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Draws;
