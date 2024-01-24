import React from "react";
import About_section_1 from "./About_section_1";
import About_section_2 from "./About_section_2";
import About_section_3 from "./About_section_3";
import About_section_4 from "./About_section_4";
import "../../styles/about_style/about_first.scss";

const About = () => {
  return (
    <div>
      <About_section_1 />
      <About_section_2 />
      <About_section_3 />
      <About_section_4 />
    </div>
  );
};

export default About;
