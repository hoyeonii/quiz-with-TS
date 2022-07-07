import React from "react";
import { Outlet, Link } from "react-router-dom";
import main from "../images/main.png";
import turtleChip from "../images/turtleChip.png";
import btsCoffee from "../images/btsCoffee.png";
import cornChip from "../images/cornChip.png";
import gummy from "../images/gummy.png";
import shrimpChip from "../images/shrimpChip.png";
import almond from "../images/almond.png";
import pepero from "../images/pepero.png";
import chac1 from "../images/chac1.png";
import chac2 from "../images/chac2.png";
import chac3 from "../images/chac3.png";
import chac4 from "../images/chac4.png";
import chac5 from "../images/chac5.png";
import chac6 from "../images/chac6.png";
import mask1 from "../images/mask1.png";
import mask2 from "../images/mask2.png";
import mask3 from "../images/mask3.png";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.jpg";
import feature3 from "../images/feature3.png";
import "../styles/Home.css";
function Home() {
  return (
    <div>
      <section className="main">
        <div className="mainImg-container">
          <img src={main} alt="main" className="mainImg" />
        </div>
        <img
          src={turtleChip}
          alt="turtleChip"
          className="absolute front turtleChip"
        />
        <img
          src={btsCoffee}
          alt="btsCoffee"
          className="absolute front btsCoffee"
        />
        <img src={gummy} alt="gummy" className="absolute  gummy" />
        <img
          src={cornChip}
          alt="cornChip"
          className="absolute front cornChip"
        />
        <img
          src={shrimpChip}
          alt="shrimpChip"
          className="absolute front shrimpChip"
        />
        <img src={almond} alt="almond" className="absolute  almond" />
        <img src={pepero} alt="pepero" className="absolute front pepero" />

        <img src={chac1} alt="chac1" className="absolute chac1" />
        <img src={chac2} alt="chac2" className="absolute front chac2" />
        <img src={chac3} alt="chac3" className="absolute  front chac3" />
        <img src={chac4} alt="chac4" className="absolute front chac4" />
        <img src={chac5} alt="chac5" className="absolute front chac5" />
        <img src={chac6} alt="chac6" className="absolute front chac6" />

        <img src={mask1} alt="mask1" className="absolute  mask1" />
        <img src={mask2} alt="mask2" className="absolute  mask2" />
        <img src={mask3} alt="mask3" className="absolute front mask3" />
      </section>
      <section className="features">
        <div className="feature">
          <div className="feature-text">
            <h3>01</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src={feature1} alt="feature" />
        </div>
        <div className="feature">
          <img src={feature2} alt="feature" />

          <div className="feature-text">
            <h3>02</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-text">
            <h3>03</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src={feature3} alt="feature" />
        </div>
      </section>
    </div>
  );
}

export default Home;
