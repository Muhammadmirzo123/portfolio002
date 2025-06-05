import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/hack.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="hack"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Fullstack Developer with over a decode of
              professional expertise in the field.Throughout my career.I have
              had previllage of coloborating with prestigious
              organizations,contributting to their succes and growth.
            </p>
            <p>
              My passion for fullstack development is not only reflected in my
              extensive experience but also in the enthusiam and deducation I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Node JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1></h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
