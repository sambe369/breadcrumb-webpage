import React from 'react'

const About_section_3 = () => {
  return (
    <div>
    <section className="about_section_3 p-5">
    <div className="container">
    <h2 className="header_whyus text-center text-white">
      Why us
    </h2>
    <div className="row row-1 gy-4">
      <div className="col-md-6 col-lg-4">
        <div className="about_card">
          <div className="about_card_body text-center">
            <img className="whyus_image img-fluid" src="fivestar.svg" alt=""/>
            <h3 className='reason'>Sheer delight from our clients</h3>
            <p className="about_card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?</p>
          </div>
        </div>
      </div>      
      <div className="col-md-6 col-lg-4">
        <div className="about_card">
          <div className="about_card_body text-center">
          <img className="whyus_image img-fluid" src="ribbon.svg" alt=""/>
            <h3 className='reason'>Quality service at affordable price</h3>
            <p className="about_card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?</p>
          </div>
        </div>
      </div>      
      <div className="col-md-6 col-lg-4 last_card">
        <div className="about_card">
          <div className="about_card_body text-center">
          <img className="whyus_image img-fluid" src="globe.svg" alt=""/>
            <h3 className='reason'>Projects delivery on time and budget</h3>
            <p className="about_card_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat nisi aperiam expedita quis. Aliquam similique beatae tenetur assumenda culpa quae, ratione cum magnam nesciunt id, aliquid porro quasi illo?</p>
          </div>
        </div>
      </div>      
    </div>
  </div>
</section>
    </div>
  )
}

export default About_section_3