import React from "react";

const About_section_2 = () => {
  return (
    <div>
      <section id="whoWeAre" className="about_section_2 p-5">
        <div className="container">
          <a className="text-decoration-none">
            <h2 className="about_header_1 text-center text-dark">Who we are</h2>
          </a>
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <span>
                <img className="img-fluid" src="home2.svg" alt="" />
              </span>
            </div>
            <div className="col-md">
              
              
              <h5>
                At Breadcrumb, we are passionate about leveraging technology to empower businesses and individuals alike. Founded in 2022, we have dedicated ourselves to crafting innovative software solutions that drive efficiency, enhance productivity, and catalyze growth.
              </h5>
              <h5 className="my-4 second">
                Our team comprises seasoned professionals, each bringing a unique set of skills and expertise to the table. From seasoned developers and designers to project managers and quality assurance specialists, we are united by our commitment to excellence and our relentless pursuit of perfection.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_section_2;
