import React from "react";
import "../styles/home_style/cards.scss";

const OurServices = (props) => {
  return (
    <div className="col-md-6 col-lg-3 to-flip">
      <div className="card front">
        <div className="card-body text-center">
          <img className="services-image" src={props.image} alt="" />
          <p className="card-title">{props.title}</p>
        </div>
      </div>
      <div className="card back">
        <div className="card-body text-center">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
