import React from 'react'

const Process = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
        <div className="about_process">
          <div className="about_process_body text-center">
            <img className="step_image img-fluid" src={props.image} alt="" />
            <h3 className="process_heading">{props.title}</h3>
            <p className="about_card_desc">{props.desc}</p>
          </div>
        </div>
    </div> 
  )
}

export default Process