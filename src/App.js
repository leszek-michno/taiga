import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./App.css";
import "./styles/navbar.css";


import Contact from "./components/contacts";
import Header from "./components/header";
import Albums from "./components/albums";
import Draws from "./components/draws";
import Pictures from "./components/paiting";
import Digital from "./components/digital";
import Sketches from "./components/sketch";
import Footer from "./components/footer";

import PicS1 from "./pictures/pic";
import PicS2 from "./pictures/pic2";
import PicS3 from "./pictures/pic3";
import PicS4 from "./pictures/pic4";
import PicS5 from "./pictures/pic5";
import PicS6 from "./pictures/pic6";
import PicS7 from "./pictures/pic7";
import PicS8 from "./pictures/pic8";
import PicS9 from "./pictures/pic9";
import PicS10 from "./pictures/pic10";
import PicS11 from "./pictures/pic11";
import PicS12 from "./pictures/pic12";
import PicS13 from "./pictures/pic13";
import PicS14 from "./pictures/pic14";


import PicD1 from "./pictures/pixD";
import PicD2 from "./pictures/pix2D";
import PicD3 from "./pictures/pix3D";
import PicD4 from "./pictures/pixD4";
import PicD5 from "./pictures/pix5D";
import PicD6 from "./pictures/pix6D";
import PicD7 from "./pictures/pix7D";
import PicD8 from "./pictures/pix8D";
import PicD9 from "./pictures/pix9D";
import PicD10 from "./pictures/pix10";

import PicDr from "./pictures/picDr";
import PicDr2 from "./pictures/picDr2";
import PicDr3 from "./pictures/picDr3";
import PicDr4 from "./pictures/picDr4";
import PicDr5 from "./pictures/picDr5";
import PicDr6 from "./pictures/picDr6";
import PicDr7 from "./pictures/picDr7";
import PicDr8 from "./pictures/picDr8";
import PicDr9 from "./pictures/picDr9";
import PicDr10 from "./pictures/picDr10";
import PicDr11 from "./pictures/picDr11";

import PicM1 from "./pictures/picM1";
import PicM2 from "./pictures/picM2";
import PicM3 from "./pictures/picM3";
import PicM4 from "./pictures/picM4";
import PicM5 from "./pictures/picM5";
import PicM6 from "./pictures/picM6";
import PicM7 from "./pictures/picM7";
import PicM8 from "./pictures/picM8";
import PicM9 from "./pictures/picM9";
import AlbumsNew from "./components/ablumsnew";


const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AlbumsNew />
      </main>
      
    </>
  );
};

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

   
  
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <div>
            <nav>
            {(toggleMenu || screenWidth > 600) && (
                <ul className="list">
                  <li>
                    <NavLink onClick={toggleNav} to="/">
                      start
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleNav} to="/contacts">
                      kontakt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleNav} to="/draw">
                      rysunki
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleNav} to="/digital">
                      digital
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleNav} to="/sketch">
                      szkice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleNav} to="/pictures">
                      malarstwo
                    </NavLink>
                  </li>
                </ul>
              )}
              <button onClick={toggleNav} className="btn">
                <AiOutlineMenu />
              </button>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/draw" element={<Draws />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/sketch" element={<Sketches />} />
                        
            <Route path="/pic" element={<PicS1 />} />
            <Route path="/pic2" element={<PicS2 />} />
            <Route path="/pic3" element={<PicS3 />} />
            <Route path="/pic4" element={<PicS4 />} />
            <Route path="/pic5" element={<PicS5 />} />
            <Route path="/pic6" element={<PicS6 />} />
            <Route path="/pic7" element={<PicS7 />} />
            <Route path="/pic8" element={<PicS8 />} />
            <Route path="/pic9" element={<PicS9 />} />
            <Route path="/pic10" element={<PicS10 />} />
            <Route path="/pic11" element={<PicS11 />} />
            <Route path="/pic12" element={<PicS12 />} />
            <Route path="/pic13" element={<PicS13 />} />
            <Route path="/pic14" element={<PicS14 />} />
            

            <Route path="/pixD" element={<PicD1 />} />
            <Route path="/pixD2" element={<PicD2 />} />
            <Route path="/pixD3" element={<PicD3 />} />
            <Route path="/pixD4" element={<PicD4 />} />
            <Route path="/pixD5" element={<PicD5 />} />
            <Route path="/pixD6" element={<PicD6 />} />
            <Route path="/pixD7" element={<PicD7 />} />
            <Route path="/pixD8" element={<PicD8 />} />
            <Route path="/pixD9" element={<PicD9 />} />
            <Route path="/pixD10" element={<PicD10 />} />

            <Route path="/picDr" element={<PicDr />} />
            <Route path="/picDr2" element={<PicDr2 />} />
            <Route path="/picDr3" element={<PicDr3 />} />
            <Route path="/picDr4" element={<PicDr4 />} />
            <Route path="/picDr5" element={<PicDr5 />} />
            <Route path="/picDr6" element={<PicDr6 />} />
            <Route path="/picDr7" element={<PicDr7 />} />
            <Route path="/picDr8" element={<PicDr8 />} />
            <Route path="/picDr9" element={<PicDr9 />} />
            <Route path="/picDr10" element={<PicDr10 />} />
            <Route path="/picDr11" element={<PicDr11 />} />

            <Route path="/picM1" element={<PicM1 />} />
            <Route path="/picM2" element={<PicM2 />} />
            <Route path="/picM3" element={<PicM3 />} />
            <Route path="/picM4" element={<PicM4 />} />
            <Route path="/picM5" element={<PicM5 />} />
            <Route path="/picM6" element={<PicM6 />} />
            <Route path="/picM7" element={<PicM7 />} />
            <Route path="/picM8" element={<PicM8 />} />
            <Route path="/picM9" element={<PicM9 />} />

            
          </Routes>
        </div>
        <footer>
        <Footer />
      </footer>
      </Router>
    </>
  );
};

export default App;
