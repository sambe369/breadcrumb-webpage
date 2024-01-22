import React from 'react';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


import "../styles/home_style/slider.scss";

const Slider = () => {

return (
  <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="img-box"><img className='d-block' src="vite.svg" alt="" /></div>
      <div className="carousel-caption d-none d-md-block">
        <p className="para one">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
        <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="img-box"><img src="vite.svg" alt="" /></div>
      <div className="carousel-caption d-none d-md-block">
        <p className="para two">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
        <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <div className="img-box"><img src="vite.svg" alt="" /></div>
      <div className="carousel-caption d-none d-md-block">
        <p className="para three">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
        <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Slider