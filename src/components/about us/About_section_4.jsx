import React, { useState } from "react";
import Process from "../../assets/Process";

const About_section_4 = () => {
  const [processes, setProcesses] = useState([
    {
      title: "1. Articulate your proposal",
      image: "lightbulb.svg",
      desc: "Present your proposal clearly and persuasively, highlighting its value proposition and benefits.",
    },
    {
      title: "2. Project specification",
      image: "target.svg",
      desc: "Comprehensive outline detailing project requirements, objectives, deliverables, and any specific criteria or constraints.",
    },
    {
      title: "3. Design and development",
      image: "lightbulb.svg",
      desc: "Creation and implementation of tailored solutions, incorporating design and development processes for optimal results.",
    },
    {
      title: "4. Testing and stabilizing",
      image: "lightbulb.svg",
      desc: "Thorough testing to ensure functionality and stability, followed by refinement for optimal performance and reliability.",
    },
    {
      title: "5. Deployment and handover",
      image: "lightbulb.svg",
      desc: "Smooth transition as project is deployed and handed over, ensuring seamless integration and client satisfaction.",
    },
    {
      title: "6. Maintainence and support",
      image: "support.svg",
      desc: "Continued support and sustenance to uphold functionality, security, and client satisfaction with the implemented solution.",
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
