import React from "react";
import Slider from "../../assets/slider";

export const Testimonial = () => {
  return (
    <div>
      <section className="section-6 testimonial p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
        
            <div className="col-md">
              <h1>Testimonials</h1>
              
              <p className='my-4'>Hear it directly: Experiences shared by those who chose Breadcrumb for their success.</p>
              <p className="my-4">Explore success stories through client testimonials, showcasing transformative journeys and genuine partnerships-a shared experience, not just a destination.</p>
            </div>
            <div className="col-md">
              <div className="image-container">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
