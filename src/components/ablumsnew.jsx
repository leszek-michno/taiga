import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/albumsnew.css";

import imgD from "../images/d7.jpeg";
import imgM from "../images/m3b.jpeg";
import imgS from "../images/s8.jpeg";
import imgDr from "../images/dr8.jpeg"

const AlbumsNew = () => {
  return (
    <>
      <h1>Albumy</h1>
      <section className="album-sec">
        <NavLink to="./draw">
          <p>rysunki</p>
          <img src={imgDr} alt="" />
        </NavLink>

        <NavLink to="./digital">
          <p>digital</p>
          <img src={imgD} alt="" />
        </NavLink>

        <NavLink to="./sketch">
          <p>szkice</p>
          <img src={imgS} alt="" />
        </NavLink>

        <NavLink to="./pictures">
          <p>malarstwo</p>
          <img src={imgM} alt="" />
        </NavLink>
      </section>
    </>
  );
};

export default AlbumsNew;
