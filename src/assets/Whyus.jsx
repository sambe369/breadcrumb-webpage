import React from 'react'

const Whyus = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
        <div className="about_card">
          <div className="about_card_body text-center">
            <img className="whyus_image img-fluid" src={props.image} alt=""/>
            <h3 className='reason'>{props.title}</h3>
            <p className="about_card_desc">{props.desc}</p>
          </div>
        </div>
      </div>      
  )
}

export default Whyus