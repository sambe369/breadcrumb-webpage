import React, { useState } from "react";
import OurServices from "../../assets/Services";
import "../../styles/home_style/cards.scss";

export const Services = () => {
  const [weserve, setWeserve] = useState([
    {
      title: "Frontend Development",
      image: "frontend green.svg",
      desc: "Revamp or launch with tailored frontend development. Elevate your user experience and make a lasting impression with our exceptional solutions.",
    },
    {
      title: "API Development",
      image: "api green.svg",
      desc: "Explore our customized solutions for seamless API integration and optimized functionality, ensuring your digital projects excel with precision and efficiency.",
    },
    {
      title: "IT Consultancy",
      image: "administrator green.svg",
      desc: "Discover our comprehensive IT consultancy services, offering strategic insights and tailored solutions for optimal business performance and growth.",
    },
    {
      title: "Dev Ops",
      image: "devops 2.svg",
      desc: "Exploring DevOps solutions? Our services seamlessly integrate development and operations, optimizing efficiency, and ensuring scalable, reliable, and secure systems. Elevate your development lifecycle with us.",
    },
    {
      title: "UI/UX Design",
      image: "uiux green.svg",
      desc: "Searching for top-notch UI/UX design? Our services blend creativity and functionality, crafting visually appealing and user-friendly experiences tailored to elevate your digital presence and engage your audience effectively.",
    },
    {
      title: "Quality Assurance",
      image: "quality assurance green.svg",
      desc: "In pursuit of top-tier quality assurance? Our services meticulously ensure the reliability and excellence of your software, providing thorough testing and quality control for a seamless user experience.",
    },
    {
      title: "Maintainence",
      image: "maintainence green.svg",
      desc: "Seeking reliable maintenance services? Entrust us with the upkeep of your systems, ensuring consistent performance, timely updates, and proactive support for a sustainable and efficient operation.",
    },
    {
      title: "Backend Development",
      image: "backend green.svg",
      desc: "In need of robust backend services? Explore our tailored solutions for efficient data management, seamless integrations, and scalable architecture, ensuring optimal performance for your digital ecosystem.",
    },
  ]);
  return (
    <div>
      <section className="section-4 services p-5">
        <div className="container">
          <h2 className="text-center text-dark">Our services</h2>
          <div className="row row-1 gy-4">
            {weserve.map((service) => {
              return (
                <OurServices
                  title={service.title}
                  image={service.image}
                  desc={service.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
