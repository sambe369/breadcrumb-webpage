import React from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

import "../styles/home_style/slider.scss";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-box">
            <img className="d-block" src="avatar-1.jpg" alt="" width={50} />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <p className="para-one">
            "We are immensely pleased with Breadcrumb's exceptional expertise. Their innovative solutions and dedicated team transformed our ideas into a robust, user-friendly application. Highly recommend their services for unparalleled quality and reliability."
            </p>
            <p className="overview">
              <b>XXXXX XXXX</b> Onthecase
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-box">
            <img src="avatar-2.jpg" alt="" width={50}/>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <p className="para-two">
            "Working with Breadcrumb was a game-changer for our business. Their technical prowess and commitment to excellence resulted in a tailored solution that exceeded our expectations. Outstanding service! ooooo oooooo ooooooo"
            </p>
            <p className="overview">
            <b>XXXXX XXXX</b> EmailLove
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-box">
            <img src="avatar-3.jpg" alt="" width={50}/>
          </div>
          <div className="carousel-caption d-none d-md-block">
            <p className="para-three">
            "Breadcrumb's team demonstrated unmatched professionalism and skill. From concept to execution, they delivered a seamless solution, addressing our unique challenges. Their collaborative approach and timely delivery made the entire process smooth and successful."
            </p>
            <p className="overview">
            <b>XXXXX XXXX</b> Appkogent
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
