import React from "react";
import { NavLink } from 'react-router-dom';
import { AiOutlineStepBackward, AiFillStepForward } from "react-icons/ai";
import img1 from "../images/s1.jpeg";
import img2 from "../images/s10.jpeg";
import img3 from "../images/s3.jpeg";
import img4 from "../images/s8.jpeg";
import img5 from "../images/s15.jpeg";
import img6 from "../images/s14.jpeg";
import img7 from "../images/s4.jpeg";
import img8 from "../images/s9.jpeg";
import img9 from "../images/s6.jpeg";
import img10 from "../images/s7.jpeg";
import img11 from "../images/s11.jpeg";
import img12 from "../images/s12.jpeg";
import img13 from "../images/s5.jpeg";
import img14 from "../images/s2.jpeg";

import '../styles/albums.css';


const Sketches = () => {
  return (
    <div className="show">
    
        <NavLink to='/pic'><img src={img1}  alt='sketch'/></NavLink>
        <NavLink to='/pic10'><img src={img2}  alt='sketch'/></NavLink>
        <NavLink to='/pic3'><img src={img3}  alt='sketch'/></NavLink>
        <NavLink to='/pic8'><img src={img4}  alt='sketch'/></NavLink>
        <NavLink to='/pic15'><img src={img5}  alt='sketch'/></NavLink>
        <NavLink to='/pic14'><img src={img6}  alt='sketch'/></NavLink>
        <NavLink to='/pic4'><img src={img7}  alt='sketch'/></NavLink>
        <NavLink to='/pic9'><img src={img8}  alt='sketch'/></NavLink>
        <NavLink to='/pic6'><img src={img9}  alt='sketch'/></NavLink>
        <NavLink to='/pic7'><img src={img10}  alt='sketch'/></NavLink>
        <NavLink to='/pic11'><img src={img11}  alt='sketch'/></NavLink>
        <NavLink to='/pic12'><img src={img12}  alt='sketch'/></NavLink>
        <NavLink to='/pic5'><img src={img13}  alt='sketch'/></NavLink>
        <NavLink to='/pic2'><img src={img14}  alt='sketch'/></NavLink>
        
        <div className="back-next">
        <NavLink to="/digital">
          <span>
            poprzedni album <AiOutlineStepBackward />
          </span>
        </NavLink>
        {"      "}
        <NavLink to="/pictures">
          <span>
            <AiFillStepForward /> kolejny album 
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sketches;
