import React from "react";
import "./AboutMe.css";

const AboutMe = ({ isLoaded }) => {
  return (
    <>
      <a className="links" href="https://github.com/awadams198">
        Github
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/anthony-adams-a4221a228/"
      >
        Linkedin
      </a>
      <p className="p-tag">
        This website was developed by a software developer named Anthony Adams,
        Please check out my links above!
      </p>
    </>
  );
};

export default AboutMe;
