import React, { useState } from "react";
import Process from "../../assets/Process";

const About_section_4 = () => {
  const [processes, setProcesses] = useState([
    {
      title: "1. Articulate your proposal",
      image: "lightbulb.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
    {
      title: "2. Project specification",
      image: "target.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
    {
      title: "Design and development",
      image: "lightbulb.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
    {
      title: "4. Testing and stabilizing",
      image: "lightbulb.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
    {
      title: "5. Project deployment and handover",
      image: "lightbulb.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
    {
      title: "6. Maintainence and support",
      image: "support.svg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?",
    },
  ]);
  return (
    <div>
      <section className="about_section_4 p-5">
        <div className="container">
          <h2 className="header_process text-center text-dark">Our process</h2>
          <div className="row row-1 gy-4">
            {processes.map((process) => {
              return (
                <Process
                  title={process.title}
                  image={process.image}
                  desc={process.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_section_4;
