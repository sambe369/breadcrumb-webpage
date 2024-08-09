import React, { useState } from "react";
import Whyus from "../../assets/Whyus";

const About_section_3 = () => {
  const [reasons, Setreason] = useState([
    {
      title: "Sheer delight from our clients",
      desc: "We take pride in our 100% client satisfaction rate, with all clients open to future collaboration or referrals. Almost all of our clients return for subsequent projects or refer others.",
      image: "fivestar.svg",
    },
    {
      title: "Quality service at affordable price",
      desc: "Exceptional quality, affordable rates. Transparent pricing, customized solutions. Get maximum value for your investment. Satisfaction guaranteed. Contact us today for top-notch service without breaking the bank.",
      image: "ribbon.svg",
    },
    {
      title: "Projects delivery on time and budget",
      desc: "We pride ourselves on delivering projects promptly and within budget. Our commitment ensures timely completion and financial transparency, providing peace of mind to our clients.",
      image: "globe.svg",
    },
  ]);
  return (
    <div>
      <section id="whyUs" className="about_section_3 p-5">
        <div className="container">
          <a href="" className="text-decoration-none">
            <h2 className="header_whyus text-center text-white">Why us</h2>
          </a>
          
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
