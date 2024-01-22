import React from 'react'

const About_section_2 = () => {
  return (
    <div>
      <section className="about_section_2 p-5">
        <div className="container">
          <a href="" className='text-decoration-none'><h2 className="about_header_1 text-center text-dark">
            Who we are
          </h2></a>
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <span><img className='img-fluid' src="home2.svg" alt="" /></span>
            </div>
            <div className="col-md">
              <span><h2>Code, Create, Conquer: Pioneering solutions for a digital future.</h2></span> 
              <p className='my-4'>At Breadcrumb, our team crafts code and designs for exceptional digital experiences. We empower you to conquer challenges and seize opportunities.</p>
                <p className="my-4 second">Associate with us on the journey of innovation as we redefine the landscape of possibilities in the digital realm.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About_section_2