import React from 'react';
import {FiArrowRightCircle} from "react-icons/Fi";

export const Section_1 = () => {
  return (
    <div>
      <section className="section-1 p-5 text-light text-center text-sm-start">
        <div className="container">

        <div className="row align-items-center justify-content-between">
        
          <div className="col-md">
            <h2><span>Navigating</span> the digital landscape: Your journey of excellence begins here.</h2>
            <p className='my-4'>We simplify navigating the modern IT landscape, providing innovative solutions for seamless integration and expertise, guiding businesses to success in technology.</p>
              <p className="my-4">Join us as we navigate the digital horizon together, empowering your enterprise for sustained growth and technological brilliance.</p>
              <a href="/contact"><button className='button btn btn-lg mt-5'>Let's Discuss Your Project</button></a>
          </div>
          <div className="col-md images">
            <span><img className='img-fluid d-none d-sm-block' src="home 1.svg" alt="" /></span> 
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
