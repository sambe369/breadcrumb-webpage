import React, { useState } from "react";
import Whyus from "../../assets/Whyus";

const About_section_3 = () => {
  const [reasons, Setreason] = useState([
    {
      title: "Sheer delight from our clients",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
      image: "fivestar.svg",
    },
    {
      title: "Quality service at affordable price",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
      image: "ribbon.svg",
    },
    {
      title: "Projects delivery on time and budget",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
      image: "globe.svg",
    },
  ]);
  return (
    <div>
      <section className="about_section_3 p-5">
        <div className="container">
          <h2 className="header_whyus text-center text-white">Why us</h2>
          <div className="row row-1 gy-4">
            {reasons.map((reason) => {
              return (
                <Whyus
                  title={reason.title}
                  image={reason.image}
                  desc={reason.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_section_3;
