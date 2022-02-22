import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
import img1 from "../images/d7.jpeg";
import img2 from "../images/d5.jpeg";
import img3 from "../images/d2.jpeg";
import img4 from "../images/d4.jpeg";
import img5 from "../images/d9.jpeg";
import img6 from "../images/d6.jpeg";
import img7 from "../images/d8.jpeg";
import img8 from "../images/d3.jpeg";
import img9 from "../images/d1.jpeg";
import img10 from "../images/d10.jpeg";
import "../styles/albums.css";

const Digital = () => {
  return (
    <div className="black">
    <div className="show">
      <NavLink to="/pixD7">
        <img src={img1} alt="digital" />
      </NavLink>
      <NavLink to="/pixD5">
        <img src={img2} alt="digital" />
      </NavLink>
      <NavLink to="/pixD2">
        <img src={img3} alt="digital" />
      </NavLink>
      <NavLink to="/pixD4">
        <img src={img4} alt="digital" />
      </NavLink>
      <NavLink to="/pixD9">
        <img src={img5} alt="digital" />
      </NavLink>
      <NavLink to="/pixD6">
        <img src={img6} alt="digital" />
      </NavLink>
      <NavLink to="/pixD8">
        <img src={img7} alt="digital" />
      </NavLink>
      <NavLink to="/pixD3">
        <img src={img8} alt="digital" />
      </NavLink>
      <NavLink to="/pixD">
        <img src={img9} alt="digital" />
      </NavLink>
      <NavLink to="/pixD10">
        <img src={img10} alt="digital" />
      </NavLink>

      <div className="back-next">
        <NavLink to="/draw">
          <span>
            poprzedni album <AiOutlineStepBackward />
          </span>
        </NavLink>
        {"      "}
        <NavLink to="/sketch">
          <span>
            <AiFillStepForward /> kolejny album 
          </span>
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Digital;
