import React from 'react'

export const Services = () => {
  return (
  <div>
    <section className="section-4 services p-5">
        <div className="container">
        <h2 className="text-center text-dark">
          Our services
        </h2>
        <div className="row row-1 gy-4">
          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="frontend green.svg" alt="" />
                <p className="card-title">Frontend Development</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>Revamp or launch with tailored frontend development. Elevate your user experience and make a lasting impression with our exceptional solutions.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="api green.svg" alt="" />
                <p className="card-title">API Development</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
              <p>Explore our customized solutions for seamless API integration and optimized functionality, ensuring your digital projects excel with precision and efficiency.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="administrator green.svg" alt="" />
                <p className="card-title">IT Consultancy</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>Discover our comprehensive IT consultancy services, offering strategic insights and tailored solutions for optimal business performance and growth.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="devops 2.svg" alt="" />
                <p className="card-title">Dev Ops</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>Exploring DevOps solutions? Our services seamlessly integrate development and operations, optimizing efficiency, and ensuring scalable, reliable, and secure systems. Elevate your development lifecycle with us.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-1 gy-4 mt-1">
          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="uiux green.svg" alt="" />
                <p className="card-title">UI/UX Design</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>Searching for top-notch UI/UX design? Our services blend creativity and functionality, crafting visually appealing and user-friendly experiences tailored to elevate your digital presence and engage your audience effectively.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="quality assurance green.svg" alt="" />
                <p className="card-title">Quality Assurance</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>In pursuit of top-tier quality assurance? Our services meticulously ensure the reliability and excellence of your software, providing thorough testing and quality control for a seamless user experience.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="maintainence green.svg" alt="" />
                <p className="card-title">Maintainence</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>Seeking reliable maintenance services? Entrust us with the upkeep of your systems, ensuring consistent performance, timely updates, and proactive support for a sustainable and efficient operation.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 to-flip">
            <div className="card front">
              <div className="card-body text-center">
                <img className="services-image" src="backend green.svg" alt="" />
                <p className="card-title">Backend Development</p>
              </div>
            </div>
            <div className="card back">
              <div className="card-body text-center">
                <p>In need of robust backend services? Explore our tailored solutions for efficient data management, seamless integrations, and scalable architecture, ensuring optimal performance for your digital ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
