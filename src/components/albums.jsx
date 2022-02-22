import React from "react";
import { NavLink } from "react-router-dom";
import imgD from "../images/d3.jpeg";
import imgM from "../images/m8.jpeg";
import imgDr from "../images/dr11.jpeg";
import imgS from "../images/s3.jpeg";

const Albums = () => {
  return (
    <>
      <h1>Albumy</h1>
      <section className="album-section">
        <div className="card">
          <div>
            <NavLink to="./draw">
              <p>szkice</p>
              <img src={imgDr} alt="draw" />
            </NavLink>
          </div>

          <div className="card">
            <div>
              <NavLink to="./digital">
                <p>digital</p>
                <img src={imgD} alt="digital" />
              </NavLink>
            </div>
          </div>

          <div className="card">
            <div>
              <NavLink to="./sketch">
                <p>rysunki</p>
                <img src={imgS} alt="sketch" />
              </NavLink>
            </div>
          </div>

          <div className="card">
            <div>
              <NavLink to="./pictures">
                <p>malarstwo</p>
                <img src={imgM} alt="pic" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Albums;
